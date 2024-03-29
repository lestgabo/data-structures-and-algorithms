/**
 ** 206. Course Schedule
 ** Medium
 ** https://leetcode.com/problems/course-schedule/

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
You are given an array prerequisites where prerequisites[i] = [ai, bi] 
indicates that you must take course bi first if you want to take course ai.

    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return true if you can finish all courses. Otherwise, return false.

 
Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and 
to take course 0 you should also have finished course 1. So it is impossible.


Constraints:
    1 <= numCourses <= 105
    0 <= prerequisites.length <= 5000
    prerequisites[i].length == 2
    0 <= ai, bi < numCourses
    All the pairs prerequisites[i] are unique.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

const canFinish = (numCourses, prerequisites) => {
    /**
     * - use backtracking with DFS
     * - the problem is basically finding out if theres a formed cylcic path
     *   and return false (not possible) if there is
     *   else true
     * - 1. make a hashmap for your courses vs its prerequisites
     * - 2. make a hashmap for courses vs status -> NOT_VISITED, VISITED, VISITING
     * - 3. make a forloop ranging from 0 to numCourses -> basically checks each course
     *   - here is where we call DFS for each course's neighbors (prerequisites) 
     *   - the DFS call should receive parameters: course, state 
     * - 4. for the DFS
     *   - state check: if we are currently in a state VISITING, that means we found 
     *     a cyclic path and we return FALSE 
     *     - this false is important because in our DFS we are also checking all 
     *       neighbors (prerequisites) and if one of our DFS call returns a false in our
     *       neighbors check, we return false 
     *   - state check: state VISITED, return TRUE. Our neighbors check will keep 
     *     iterating and wont get stopped if all our DFS returns true
     *   - if state not VISITING or VISITED then it was NOT_VISITED and we update it to VISITING
     *   - after state checks and state update, we look at neighbors (prerequisites)
     *     - this is where our DFS recursive call happens
     *     - and as mentioned earlier, if the DFS return false (inside a VISITING which means cyclic)
     *       then our iteration through the neighbors returns a false too
     *     - if the DFS doesn not return false then the iteration through the neighbors finishes
     *       and we update the state of current course as VISITED
     *     - and we just return TRUE
     * 
     */
    // make object for courses vs its prerequisites
    let prereqsPerCourse = {}
    for (let [course, prereqs] of prerequisites) {
        // console.log('a: ', a)
        // console.log('b: ', b)
        prereqsPerCourse[course] ? prereqsPerCourse[course].push(prereqs) : prereqsPerCourse[course] = [prereqs]
    }
    // add the courses that dont need prerequisites
    for (let course = 0; course < numCourses; course++) {
        // no prereqs for course then set to empty array
        if (!prereqsPerCourse[course]) prereqsPerCourse[course] = [];
    }
    // console.log('prereqspercourse: ', prereqsPerCourse)

    // states
    NOT_VISITED = 0;
    VISITED = 1; 
    VISITING = 2;
    let state = {};
    // set default states for courses
    for (let course = 0; course < numCourses; course++) {
        state[course] = NOT_VISITED;
    }
   
    // dfs 
    const dfs = (course) => {
        // console.log('course: ', course)
        // console.log('state[course]: ', state[course])
        // console.log('state[course] == VISITING: ', state[course] === VISITING)
        // console.log('state[course] == VISITED: ', state[course] === VISITED)

        // check if visiting - (cylcic path found)
        if (state[course] === VISITING) return true;
        // check if visited - (already visited)
        if (state[course] === VISITED) return false;

        // update current course state to visiting 
        state[course] = VISITING;

        let cyclic = false;
        // look through each course's neighbors (prerequisites)
        Object.values(prereqsPerCourse[course]).some( (prereqs) => {  
            // console.log('prereqsPerCourse[course]: ', prereqsPerCourse[course])   
            // console.log('prereqs: ', prereqs)   
            // console.log('#####################')   
            // console.log('isNotCyclic after DFS: ', isNotCyclic)
            cyclic = dfs(prereqs)
            // console.log('cyclic: ', cyclic)
            if (cyclic) return true;
        })
        // console.log('**************')

        // update course
        state[course] = VISITED;

        return cyclic;
    }

    // check each course
    for (let course = 0; course < numCourses; course++) {
        // console.log('state: ', state)
        if (state[course] !== VISITED) {
            if (dfs(course)) {
                // console.log('helloooo we have a cycle!!!!')
                return false;
            }
        }
    }
    return true;
};

// numCourses = 4;
// prerequisites = [[0,1], [1,2], [1,3]]
// numCourses = 2;
// prerequisites = [[0,1], [1,0]]
// prerequisites = [[1,0]]

numCourses = 3
prerequisites = [[1,0],[1,2],[0,1]]
Output: true
Expected: false

console.log(canFinish(numCourses, prerequisites));