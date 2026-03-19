function solution(numbers, target) {
  const dfs = (i, sum) =>
    i === numbers.length
      ? sum === target ? 1 : 0
      : dfs(i + 1, sum + numbers[i]) + dfs(i + 1, sum - numbers[i]);

  return dfs(0, 0);
}
