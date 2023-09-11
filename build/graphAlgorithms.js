"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Graph {
    nodes;
    edges;
    constructor(nodes = [], edges = {}) {
        this.nodes = nodes;
        this.edges = edges;
    }
    addNode(node) {
        this.nodes.push(node);
        this.edges[node] = {};
    }
    addEdge(node1, node2, weight) {
        this.edges[node1][node2] = weight;
        this.edges[node2][node1] = weight;
    }
    // find the minimum unvisited node for the next relaxation
    minDistanceNode(distances, visited) {
        let minDistance = Infinity;
        let minNode = "";
        for (const node in distances) {
            if (visited[node])
                continue;
            if (distances[node] <= minDistance) {
                minDistance = distances[node];
                minNode = node;
            }
        }
        return minNode;
    }
    dijkstra(start) {
        const distances = {};
        const visited = {};
        for (const node of this.nodes) {
            distances[node] = Infinity;
            visited[node] = false;
        }
        distances[start] = 0;
        for (let i = 0; i < this.nodes.length; i++) {
            let u = this.minDistanceNode(distances, visited);
            visited[u] = true;
            for (const node in this.edges[u]) {
                if (visited[node])
                    continue;
                const candidate = distances[u] + this.edges[u][node];
                if (candidate < distances[node]) {
                    distances[node] = candidate;
                }
            }
        }
        return distances;
    }
}
exports.default = Graph;
