function solution(answers){
    const patterns = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    
    const scores = patterns.map(pattern =>
    answers.filter((a,i) => a === pattern[i%pattern.length]).length);


const max = Math.max(...scores);
return scores
.map((s,i) => (s === max ? i+1 : null))
.filter(Boolean);
}


// const scores = [0,0,0];

// for(let i = 0; i < answers.length; i++){
//     if(answers[i] === pattern1[i % pattern1.length]) scores[0]++;
//     if(answers[i] === pattern2[i % pattern2.length]) scores[1]++;
//     if(answers[i] === pattern3[i % pattern3.length]) scores[2]++;
// }


// 💡 “아 패턴이 여러 개구나” → 배열로 묶기
// const patterns = [p1, p2, p3];
// const scores = [];

// for (let p = 0; p < patterns.length; p++) {
//     let count = 0;
//     for (let i = 0; i < answers.length; i++) {
//         if (answers[i] === patterns[p][i % patterns[p].length]) {
//             count++;
//         }
//     }
//     scores.push(count);
// }