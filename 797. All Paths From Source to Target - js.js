/**
 ** 797. All Paths From Source to Target
 ** Medium
 ** https://leetcode.com/problems/all-paths-from-source-to-target/

Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1, and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

 

Example 1:

Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Example 2:

Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

Example 3:

Input: graph = [[1],[]]
Output: [[0,1]]

Example 4:

Input: graph = [[1,2,3],[2],[3],[]]
Output: [[0,1,2,3],[0,2,3],[0,3]]

Example 5:

Input: graph = [[1,3],[2],[3],[]]
Output: [[0,1,2,3],[0,3]]

 

Constraints:

    n == graph.length
    2 <= n <= 15
    0 <= graph[i][j] < n
    graph[i][j] != i (i.e., there will be no self-loops).
    The input graph is guaranteed to be a DAG.


 */

/**
 ** @param {number[][]} graph
 ** @return {number[][]} path
 */
const solution = (graph) => {
    // create path
    // create results (all paths)
    // create target => the last node of the graph
    // run DFS from starting node
    // in DFS save each node passed into path
    // when at last node (index === graph.length-1) add the current path into results

    let path = [];
    let result = [];
    let target = graph.length - 1;

    const dfsHelper = (index) => {
        if (index === target) {
            console.log('path: ', [...path]);
            // found target, so push path into result
            // pushing path itself gives original path after everything,
            // we want THE CURRENT path, es6 style of making new array
            result.push([...path]);
        } else {
            for (let i = 0; i < graph[index].length; i++) {
                // add node to the current path
                path.push(graph[index][i]);
                dfsHelper(graph[index][i]);
                // once dfs is finished delete the current path
                path.pop();
            }
        }
    };
    // start the dfs
    path.push(0);
    dfsHelper(0);
    return result;
};

const graph = [[1, 2], [3], [3], []]; //  [[0,1,3],[0,2,3]]
console.log(solution(graph));
