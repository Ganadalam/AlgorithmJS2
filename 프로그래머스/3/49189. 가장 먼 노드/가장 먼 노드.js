function solution(n, edge) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let [a, b] of edge) {
        graph[a].push(b);
        graph[b].push(a); // 무방향 그래프
    }

    const visited = Array(n + 1).fill(false);
    const distance = Array(n + 1).fill(0);
    const queue = [1];
    visited[1] = true;

    while (queue.length > 0) {
        const current = queue.shift();

        for (let next of graph[current]) {
            if (!visited[next]) {
                visited[next] = true;
                distance[next] = distance[current] + 1;
                queue.push(next);
            }
        }
    }

    const maxDist = Math.max(...distance);
    return distance.filter(d => d === maxDist).length;
}
