function solution(game_board, table) {
  const N = game_board.length;
  const dirs = [
    [0, 1], [1, 0], [0, -1], [-1, 0]
  ]; // 우, 하, 좌, 상 (BFS용)

  // 도형 추출 (game_board에서 빈칸(0), table에서 블록(1))
  const extractShapes = (board, target) => {
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    const shapes = [];

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (board[i][j] !== target || visited[i][j]) continue;

        const queue = [[i, j]];
        visited[i][j] = true;
        const shape = [];

        while (queue.length) {
          const [x, y] = queue.shift();
          shape.push([x, y]);

          for (const [dx, dy] of dirs) {
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < N && ny < N &&
              !visited[nx][ny] && board[nx][ny] === target) {
              visited[nx][ny] = true;
              queue.push([nx, ny]);
            }
          }
        }

        // 좌상단 기준 정규화
        const minX = Math.min(...shape.map(([x]) => x));
        const minY = Math.min(...shape.map(([_, y]) => y));
        const normalized = shape.map(([x, y]) => [x - minX, y - minY])
                                .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
        shapes.push(normalized);
      }
    }

    return shapes;
  };

  // 도형 회전 (90도 회전)
  const rotate = (shape) => {
    const rotated = shape.map(([x, y]) => [y, -x]);
    const minX = Math.min(...rotated.map(([x]) => x));
    const minY = Math.min(...rotated.map(([_, y]) => y));
    return rotated.map(([x, y]) => [x - minX, y - minY])
                  .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  };

  const blanks = extractShapes(game_board, 0);
  const blocks = extractShapes(table, 1);
  const used = Array(blocks.length).fill(false);

  let answer = 0;

  for (const blank of blanks) {
    for (let i = 0; i < blocks.length; i++) {
      if (used[i]) continue;

      let block = blocks[i];

      for (let r = 0; r < 4; r++) {
        if (blank.length === block.length &&
          blank.every(([x, y], idx) => x === block[idx][0] && y === block[idx][1])) {
          used[i] = true;
          answer += block.length;
          break;
        }
        block = rotate(block);
      }
      if (used[i]) break;
    }
  }

  return answer;
}
