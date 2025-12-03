// ZOAC 4 문제 풀이 (BOJ 23971)
// Node.js (빠르고 깔끔하게)

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

const [H, W, N, M] = input;

// 세로 방향 가능한 인원
const rows = Math.ceil(H / (N + 1));
// 가로 방향 가능한 인원
const cols = Math.ceil(W / (M + 1));

// 최대 인원
const result = rows * cols;

console.log(result);
