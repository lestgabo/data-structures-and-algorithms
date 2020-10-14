/**
 * 323. Number of Connected Components in an Undirected Graph
Medium

Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.

Example 1:

Input: n = 5 and edges = [[0, 1], [1, 2], [3, 4]]

     0          3
     |          |
     1 --- 2    4 

Output: 2

Example 2:

Input: n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]]

     0           4
     |           |
     1 --- 2 --- 3

Output:  1

Note:
You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
 */

/**
 * param {number} n
 * param {number[][]} edges
 * return {number}
 */

const connectedComponents = (n, edges) => {
    /**
     * use dfs
     * initialize each node by making each value -1,
     * run dfs into each node, if current value is -1 then make it 1. then call dfs making each passed node as 1, once theres no more -1 found, increment counter, move on to next node
     *
     */
    // console.log('edges ->', edges);
    let counter = 0;
    let nodeValues = [];
    for (let i = 0; i < n; i++) {
        nodeValues.push(-1);
    }

    const dfs = (node, nodeValues) => {
        nodeValues[node] = 1;
        // for each adjacent node, do dfs
        for (let j = 0; j < edges.length; j++) {
            let edge = edges[j];
            if (edge.includes(node)) {
                // console.log('edge ->', edge);
                let connectedNode = edge[0];
                if (edge[0] === node) {
                    connectedNode = edge[1];
                }
                // console.log('connectedNode ->', connectedNode);
                // call dfs on connected node
                if (nodeValues[connectedNode] === -1) {
                    dfs(connectedNode, nodeValues);
                }
            }
        }
    };

    for (let i = 0; i < n; i++) {
        // i is a node
        if (nodeValues[i] === -1) {
            dfs(i, nodeValues);
            // console.log('nodeValues ->', nodeValues);
            counter++;
        }
    }
    return counter;
};

let n = 5;
// let edges = [
//     [0, 1],
//     [1, 2],
//     [3, 4],
// ];
let edges = [
    [0, 4],
    [1, 1],
    [2, 2],
    [3, 4],
];
console.log(connectedComponents(n, edges));
