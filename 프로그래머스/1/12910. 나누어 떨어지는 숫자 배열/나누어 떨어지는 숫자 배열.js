function solution(arr, divisor) {
    const result = []
    arr.sort((a,b) => a - b).forEach(el => {
        if(el % divisor === 0) result.push(el)
    })
    return result.length ? result : [-1] 
}