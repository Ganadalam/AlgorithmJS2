function solution(citations){
    citations.sort((a,b) => b-a);  //내림차순
    const idx = citations.findIndex((c,i) => c < i+1) // 현재 논문 인용 수 < 지금까지 논문 수 
    return idx !== -1 ? idx : citations.length 
    //깨지는 지점 O: idx, 끝까지 안 깨짐: -1(논문 all 조건 만족)
}