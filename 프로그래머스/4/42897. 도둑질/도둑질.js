function solution(money) {
  const rob = (start, end) => {
    const dp = Array(money.length).fill(0);
    dp[start] = money[start];
    dp[start + 1] = Math.max(money[start], money[start + 1]);

    for (let i = start + 2; i <= end; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + money[i]);
    }

    return dp[end];
  };

  return Math.max(
    rob(0, money.length - 2), // 첫 집 포함, 마지막 제외
    rob(1, money.length - 1)  // 첫 집 제외, 마지막 포함
  );
}
