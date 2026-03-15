function solution(genres,plays){
    const songsByGenre = {};
    
    genres.forEach((g,i) => (songsByGenre[g] ||=[])
                  .push([plays[i],i]))   // 재생 수, index
    
    return Object.entries(songsByGenre) // 장르, 재생수 및 인덱스
    .sort((a,b) =>
         b[1].reduce((sum,[p]) => sum + p, 0)
    -    a[1].reduce((sum,[p]) => sum + p, 0))
    .flatMap(([_, songs]) => 
             songs
            .sort((a,b) => b[0] - a[0] || a[1] - b[1])
            .slice(0,2)
            .map(([,i]) => i))
}