function solution(clothes){
    const map = new Map();
    
    for([,cat] of clothes){
        map.set(cat, (map.get(cat) ||0) +1)
    }
    return [...map.values()]
    .reduce((acc, cur) => acc * (cur+1),1)-1
}