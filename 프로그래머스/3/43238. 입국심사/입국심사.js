function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;
    let answer = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let total = 0;

        for (let time of times) {
            total += Math.floor(mid / time);
        }

        if (total >= n) {
            answer = mid;
            right = mid - 1; // 더 짧은 시간도 가능한지 탐색
        } else {
            left = mid + 1; // 시간이 부족함 -> 더 긴 시간 필요
        }
    }

    return answer;
}
