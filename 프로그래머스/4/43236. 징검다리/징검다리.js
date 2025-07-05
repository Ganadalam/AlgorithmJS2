function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b);
    rocks.push(distance); // 도착지점 = 마지막 바위처럼 취급

    let left = 1;
    let right = distance;
    let answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let prev = 0;
        let removed = 0;

        for (let i = 0; i < rocks.length; i++) {
            if (rocks[i] - prev < mid) {
                // mid 보다 짧으면, 바위 제거
                removed++;
            } else {
                // mid 보다 길면, 통과 & 다음 거리 계산
                prev = rocks[i];
            }
        }

        if (removed > n) {
            // if 너무 많이 제거 → 최소거리 너무 큼 → 줄여야
            right = mid - 1;
        } else {
            // if 제거 수가 충분  → 더 늘릴 수 있음
            answer = mid;
            left = mid + 1;
        }
    }

    return answer;
}
