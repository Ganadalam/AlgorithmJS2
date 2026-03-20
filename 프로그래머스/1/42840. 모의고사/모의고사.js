function solution(answers) {

  const patterns = [
      [1,2,3,4,5],
      [2,1,2,3,2,4,2,5],
      [3,3,1,1,2,2,4,4,5,5]
];

const scores = patterns.map(
    pattern => answers.filter((a, i) => a === pattern[i % pattern.length]).length
);

const max = Math.max(...scores);
    
return scores
.map((s, i) => (s === max ? i + 1 : null))
.filter(Boolean);
}