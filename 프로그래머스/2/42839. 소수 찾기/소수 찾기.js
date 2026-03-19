function solution(numbers) {
  const numSet = new Set();

  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const dfs = (path, rest) => {
    if (path) numSet.add(+path);
    for (let i = 0; i < rest.length; i++) {
      dfs(path + rest[i], rest.slice(0, i) + rest.slice(i + 1));
    }
  };

  dfs('', numbers);
  return [...numSet].filter(isPrime).length;
}

// 중복 제거 위한 Set
    // 소수 판별 함수
//    const isPrime = (num) => {
//        if (num < 2) return false;
//        for (let i = 2; i * i <= num; i++) {
//            if (num % i === 0) return false;
//        }
//        return true;
//    };

    // 순열 구하는 함수
//    const getPermutations = (arr, selectNumber) => {
//        if (selectNumber === 1) return arr.map((v) => [v]);
//        const result = [];
//        arr.forEach((fixed, index, origin) => {
//            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//            const permutations = getPermutations(rest, selectNumber - 1);
//           const attached = permutations.map((perm) => [fixed, ...perm]);
//            result.push(...attached);
//        });
//        return result;
//    };

    // 모든 순열 조합하여 숫자로 만들고 소수 여부 확인
//    for (let i = 1; i <= numbers.length; i++) {
//        const perms = getPermutations([...numbers], i);
//        perms.forEach((perm) => {
//            const num = parseInt(perm.join(''), 10);
//            if (isPrime(num)) numSet.add(num);
 //       });
 //   }

//    return numSet.size;
//}
