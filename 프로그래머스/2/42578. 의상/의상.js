function solution(clothes) {
  const map = new Map();

  for (const [, category] of clothes) {
    map.set(category, (map.get(category) || 0) + 1);
  }

  return [...map.values()].reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
// function solution(items) {
//   const map = new Map();
//   for (const [, category] of items) {
//     map.set(category, (map.get(category) || 0) + 1);
//   }
//   return [...map.values()].reduce((acc, cur) => acc * (cur + 1), 1) - 1;
// }



// reduce() Map chaining , reduce() 곱셈, 체인 끝 -1 처리 => 시간복잡도: O(n)  
// function solution(clothes) {
//  return [...clothes.reduce((map, [, type]) =>
//    map.set(type, (map.get(type) || 0) + 1), new Map()
//  ).values()]
//   .reduce((acc, count) => acc * (count + 1), 1) - 1;
//}

// 기존: O(n), 카테고리 수: for 반복 + 조건분기  
// 곱셈: for.. of 순차 곱셈 ,반환: answer - 1