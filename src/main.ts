import insertionSort from "./insertionSort";
import binarySearch from "./binarySearch";
import quickSort from "./divideAndConquer";
import fibonacci, { recFibonacci } from "./dynamicProgramming";
import invertImage from "./matrix";
import Graph from "./graphAlgorithms";

// let arr = [3, 1, 2, 0, 5, 8, 6, 9, 4, 7];

// insertionSort(arr);
// console.log(arr.join(", "));

// console.log(binarySearch(arr, 9));
// console.log(binarySearch(arr, 10));

// arr = [3, 1, 2, 0, 5, 8, 6, 9, 4, 7];
// const quickSorted: number[] = quickSort(arr);
// console.log(quickSorted.join(", "));

// const p1_0 = performance.now();
// console.log(fibonacci(1300));
// const p1_1 = performance.now();
// console.log(`Dynamic approach took ${Math.round(p1_1 - p1_0)} milliseconds`);

// const p2_0 = performance.now();
// console.log(recFibonacci(40));
// const p2_1 = performance.now();
// console.log(
//   `Simple recursive  approach took ${Math.round(p2_1 - p2_0)} milliseconds`
// );

// const mtx = [
//   [1, 1, 0, 0],
//   [1, 0, 0, 1],
//   [0, 1, 1, 1],
//   [1, 0, 1, 0],
// ];
// console.log(mtx.join(", \n"), "\n");
// console.log(invertImage(mtx).join(", \n"));

const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B", 1);
graph.addEdge("A", "C", 5);
graph.addEdge("B", "D", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("B", "E", 4);
graph.addEdge("C", "E", 7);
graph.addEdge("D", "E", 7);

const shortestDistances = graph.dijkstra("A");

console.log("Shortest distances from node A:");
for (const node in shortestDistances) {
  console.log(node + ": " + shortestDistances[node]);
}
