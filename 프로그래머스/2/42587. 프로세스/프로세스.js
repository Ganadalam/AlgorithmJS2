function solution(priorities, location){
    const queue = priorities.map((p,i) => [p,i]) // queue
    let count = 0;
    
    while(queue.length){
        const task = queue.shift();
        if(queue.some(([p]) => p > task[0])) {
            queue.push(task);
        }
        else{
            count++;
            if(task[1] === location) return count
        }
    }
}

