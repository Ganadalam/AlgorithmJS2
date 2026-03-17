function solution(array, commands){
    return commands.map(
        ([i,j,k]) => array
            .slice(i-1, j)
            .sort((a, b) => a - b)[k-1]
    )
}// slice 후 sort (index = 0부터)
