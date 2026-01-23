function solution(citations){
    citations.sort((a,b) => b-a);
    const idx = citations.findIndex((c,i) => c < i+1)
    return idx !== -1 ? idx : citations.length 
}