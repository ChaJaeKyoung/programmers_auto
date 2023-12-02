function solution(arr, flag) {
    const result = []
    flag.forEach((el, i) => {
        if(el) {
            for(let k = 0; k < arr[i] * 2; k++) {
                result.push(arr[i])
            }
        } else {
            for(let k = 0; k < arr[i]; k++) {
                result.pop()
            }    
        }
    })
    return result
}