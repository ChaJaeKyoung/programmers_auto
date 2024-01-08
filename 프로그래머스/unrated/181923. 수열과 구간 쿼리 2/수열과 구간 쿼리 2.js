function solution(arr, queries) {
    const result = []
    queries.forEach(el => {
        const min = []
        for(let i = el[0]; i <= el[1]; i++) {
            if(arr[i] > el[2]) {
                min.push(arr[i])
            }
        }
        if(min.length > 0) {
            result.push(min.sort((a,b) => a - b)[0])
        } else {
            result.push(-1)
        }
    })
    return result
}