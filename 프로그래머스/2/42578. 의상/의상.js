function solution(clothes){
    const map = new Map();
    for(const [,cat] of clothes) map.set(cat, (map.get(cat)||0)+1);
    return [...map.values()].reduce((a,b)=>a*(b+1),1)-1;
}
