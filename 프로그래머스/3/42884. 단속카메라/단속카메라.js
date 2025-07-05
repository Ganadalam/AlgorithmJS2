function solution(routes) {
    // 차량의 진출 지점을 기준으로 정렬
    routes.sort((a, b) => a[1] - b[1]);

    let cameras = 0;
    let cameraPos = -Infinity;

    for (let [start, end] of routes) {
        // 현재 카메라로 커버되지 않는 경우
        if (start > cameraPos) {
            cameras++;         // 새 카메라 설치
            cameraPos = end;   // 카메라 위치를 현재 차량의 진출 지점으로
        }
    }

    return cameras;
}
