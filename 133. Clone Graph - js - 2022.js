/**
 ** 133. Clone Graph
 ** Medium
 ** https://leetcode.com/problems/clone-graph/
 * 
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}

 
Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). 
For example, the first node with val == 1, the second node with val == 2, and so on. 
The graph is represented in the test case using an adjacency list.
An adjacency list is a collection of unordered lists used to represent a finite graph. 
Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. 
You must return the copy of the given node as a reference to the cloned graph.

 
Example 1:

Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

Example 2:

Input: adjList = [[]]
Output: [[]]
Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.

Example 3:

Input: adjList = []
Output: []
Explanation: This an empty graph, it does not have any nodes.

 
Constraints:

    The number of nodes in the graph is in the range [0, 100].
    1 <= Node.val <= 100
    Node.val is unique for each node.
    There are no repeated edges and no self-loops in the graph.
    The Graph is connected and all nodes can be visited starting from the given node.
 */

// Definition for a Node.
function Node(val, neighbors){
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
 * @param {Node} node
 * @return {Node}
 */

const cloneGraph = (node) => {
    /**
     * - use hashmap -> to save a clone of current node to check if visited or not
     * - recursion -> we will recursively call this function again for each neighbor
     * - hmm hard to test locally because of making nodes myself -> will use leetcode's IDE
     */
    let visited = {};

    const helper = (node) => {
        // base case
        if (!node) return null;
    
        // not yet visited, create clone, no neighbors
        if (!visited[node.val]) {
            let cloneNode = new Node(node.val, [])
            visited[node.val] = cloneNode;
            
            // recursion - iterate through neighbors
            if (node.neighbors) {
                visited[node.val].neighbors = node.neighbors.map((neighbor) => helper(neighbor));
            }           
        }
        
        // already visited - return the cloned node
        return visited[node.val]
    }

    return helper(node);
};

let one, two, three, four;
one = new Node(1, [two, four])
two = new Node(2, [one, three])
three = new Node(3, [two, four])
four = new Node(4, [one, three])
// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Input: adjList = [one, two, three, four]
Output: [[2,4],[1,3],[2,4],[1,3]]

console.log(cloneGraph(adjList));


/**

        // console.log('node: ', node)
        // base case
        if (!node) return null;
    
        console.log('visited: ', visited)
        
        // not yet visited, create clone, no neighbors
        if (!visited[node.val]) {
            let cloneNode = new Node(node.val, [])
            visited[node.val] = cloneNode;
            visited[node.val].neighbors = node.neighbors.map((neighbor) => cloneGraph(neighbor));
        }
        
        return visited[node.val]



const cloneGraph = (node) => {

    
     let visited = {};
    
     const helper = (node) => {
         // console.log('node: ', node)
         // base case
         if (!node) return null;
     
         console.log('visited: ', visited)
         
         // not yet visited, create clone, no neighbors
         if (!visited[node.val]) {
             let cloneNode = new Node(node.val, [])
             visited[node.val] = cloneNode;
             visited[node.val].neighbors = node.neighbors.map((neighbor) => {
                 helper(neighbor)
             });
         }
         
         return visited[node.val]
     }
     // console.log('visited: ', visited)
     return helper(node)
 };
 
 */