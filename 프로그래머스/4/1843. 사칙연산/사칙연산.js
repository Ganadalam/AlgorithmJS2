function solution(arr) {
  const n = Math.floor(arr.length / 2) + 1;
  const nums = [];
  const ops = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) nums.push(Number(arr[i]));
    else ops.push(arr[i]);
  }

  const dpMax = Array.from({ length: n }, () => Array(n).fill(-Infinity));
  const dpMin = Array.from({ length: n }, () => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    dpMax[i][i] = dpMin[i][i] = nums[i];
  }

  for (let len = 1; len < n; len++) {
    for (let i = 0; i < n - len; i++) {
      let j = i + len;
      for (let k = i; k < j; k++) {
        const op = ops[k];
        const maxLeft = dpMax[i][k];
        const minLeft = dpMin[i][k];
        const maxRight = dpMax[k + 1][j];
        const minRight = dpMin[k + 1][j];

        if (op === '+') {
          dpMax[i][j] = Math.max(dpMax[i][j], maxLeft + maxRight);
          dpMin[i][j] = Math.min(dpMin[i][j], minLeft + minRight);
        } else {
          dpMax[i][j] = Math.max(dpMax[i][j], maxLeft - minRight);
          dpMin[i][j] = Math.min(dpMin[i][j], minLeft - maxRight);
        }
      }
    }
  }

  return dpMax[0][n - 1];
}
