function solution(n, costs) {
  // 부모 노드 저장 배열 초기화
  const parent = Array.from({ length: n }, (_, i) => i);

  // find: 부모 노드 탐색
  function find(x) {
    if (parent[x] === x) return x;
    return parent[x] = find(parent[x]);
  }

  // union: 두 노드 연결
  function union(a, b) {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA !== rootB) parent[rootB] = rootA;
  }

  // 비용 기준 정렬
  costs.sort((a, b) => a[2] - b[2]);

  let totalCost = 0;

  for (const [a, b, cost] of costs) {
    if (find(a) !== find(b)) {
      union(a, b);
      totalCost += cost;
    }
  }
    
  return totalCost;
}
