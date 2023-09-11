export default class Graph {
  constructor(
    private nodes: string[] = [],
    private edges: Record<string, Record<string, number>> = {}
  ) {}

  public addNode(node: string): void {
    this.nodes.push(node);
    this.edges[node] = {};
  }

  public addEdge(node1: string, node2: string, weight: number) {
    this.edges[node1][node2] = weight;
    this.edges[node2][node1] = weight;
  }

  // find the minimum unvisited node for the next relaxation
  private minDistanceNode(
    distances: Record<string, number>,
    visited: Record<string, boolean>
  ): string {
    let minDistance = Infinity;
    let minNode = "";

    for (const node in distances) {
      if (visited[node]) continue;
      if (distances[node] <= minDistance) {
        minDistance = distances[node];
        minNode = node;
      }
    }

    return minNode;
  }

  public dijkstra(start: string): Record<string, number> {
    const distances: Record<string, number> = {};
    const visited: Record<string, boolean> = {};

    for (const node of this.nodes) {
      distances[node] = Infinity;
      visited[node] = false;
    }
    distances[start] = 0;

    for (let i = 0; i < this.nodes.length; i++) {
      let u = this.minDistanceNode(distances, visited);
      visited[u] = true;

      for (const node in this.edges[u]) {
        if (visited[node]) continue;
        const candidate = distances[u] + this.edges[u][node];
        if (candidate < distances[node]) {
          distances[node] = candidate;
        }
      }
    }

    return distances;
  }
}
