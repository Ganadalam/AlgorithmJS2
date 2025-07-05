function solution(N, number) {
  if (N === number) return 1;

  const dp = Array.from({ length: 9 }, () => new Set());

  for (let i = 1; i <= 8; i++) {
    // 숫자를 반복해서 붙인 값 (예: 5, 55, 555)
    dp[i].add(Number(String(N).repeat(i)));

    for (let j = 1; j < i; j++) {
      for (const x of dp[j]) {
        for (const y of dp[i - j]) {
          dp[i].add(x + y);
          dp[i].add(x - y);
          dp[i].add(x * y);
          if (y !== 0) dp[i].add(Math.floor(x / y));
        }
      }
    }

    if (dp[i].has(number)) return i;
  }

  return -1;
}
