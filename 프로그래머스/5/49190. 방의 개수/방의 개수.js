function solution(arrows) {
    const visitedNodes = new Set();
    const visitedEdges = new Set();
    const dir = [
        [0, 1], [1, 1], [1, 0], [1, -1],
        [0, -1], [-1, -1], [-1, 0], [-1, 1]
    ];

    let x = 0, y = 0;
    visitedNodes.add('0,0');
    let answer = 0;

    for (let d of arrows) {
        for (let i = 0; i < 2; i++) { // 꼭 2번씩 이동 (교차 방지용)
            const nx = x + dir[d][0];
            const ny = y + dir[d][1];

            const nodeKey = `${nx},${ny}`;
            const edgeKey = `${x},${y}-${nx},${ny}`;
            const reverseEdgeKey = `${nx},${ny}-${x},${y}`;

            if (visitedNodes.has(nodeKey) && !visitedEdges.has(edgeKey)) {
                answer++;
            }

            visitedNodes.add(nodeKey);
            visitedEdges.add(edgeKey);
            visitedEdges.add(reverseEdgeKey);

            x = nx;
            y = ny;
        }
    }

    return answer;
}
