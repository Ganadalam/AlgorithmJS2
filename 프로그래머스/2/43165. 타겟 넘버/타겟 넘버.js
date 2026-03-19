function solution(numbers, target) {
  const dfs = (i, sum) =>
    i === numbers.length
      ? sum === target ? 1 : 0
      : dfs(i + 1, sum + numbers[i]) + dfs(i + 1, sum - numbers[i]);

  return dfs(0, 0);
}

// 재귀 함수 -> 값 반환 (cf. let answer = 0, 내부 counting)
// 상태저장: 함수 리턴 값 누적 계싼 방식 (cf. 외부변수(answer) 이용 )
// 종료 조건: 삼항 연산자(cf. if(index === length) 명시적 분기)
// 확장성: 함수형 -> test & reuse -> good (cf. answer를 외부 변수로 사용 = bad;;)