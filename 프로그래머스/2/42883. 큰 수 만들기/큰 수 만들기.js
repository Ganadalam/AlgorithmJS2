function solution(number, k) {
  const stack = [];

  for (let digit of number) {
    while (k > 0 && stack.length && stack[stack.length - 1] < digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  // k가 남았다면 뒤에서 제거
  return stack.slice(0, stack.length - k).join('');
}



// // 깜짝 문제 - //부모 별, 평균과 표준편파 구하기
// //(1) 그룹핑 (2) (정답반환) 평균 및 표준편차 구하기 함수
// function solution(data){
//     const group = {}; // 부모 - 자식 매칭
//     for(const [parent, child] of data) {
//         if(!group[parent]) group[parent] = [];
//         group[parent].push(child);
//     }
    
//     //(2) 정답 result 반환
//     const result ={};
//     for(const key in group) {
//         const arr = group[key];
//         const mean = getMean(arr);
//         const std = getStd(arr, mean);
//         result[key] = {mean,std};// 필요 시 둘 다 저장
//     }
//     return result;
//     // mean 평균 계산함수
//     function getMean(arr){
//         return arr.reduce((a,b) => a+b,0)/arr.length
//     }
//     function getStd(arr, mean){
//         const variance = arr.reduce((sum,val) => sum + (val-mean) **2)/arr.length
//         return Math.sqrt(variance);
//     }
// }