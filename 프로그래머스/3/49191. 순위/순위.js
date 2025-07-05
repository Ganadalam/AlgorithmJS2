function solution(n, results) {
    const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    // if A가 B를 이겼다면, graph[A][B] = 1, graph[B][A] = -1
    results.forEach(([a, b]) => {
        graph[a][b] = 1;
        graph[b][a] = -1;
    });

    // 플로이드-워셜 알고리즘 -> 간접 승패 관계 설정
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (graph[i][k] === 1 && graph[k][j] === 1) {
                    graph[i][j] = 1;
                    graph[j][i] = -1;
                }
                if (graph[i][k] === -1 && graph[k][j] === -1) {
                    graph[i][j] = -1;
                    graph[j][i] = 1;
                }
            }
        }
    }

    // 모든 선수 & 승패 결정된 선수 찾기
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        let count = 0;
        for (let j = 1; j <= n; j++) {
            if (graph[i][j] !== 0) count++;
        }
        if (count === n - 1) answer++;
    }

    return answer;
}
