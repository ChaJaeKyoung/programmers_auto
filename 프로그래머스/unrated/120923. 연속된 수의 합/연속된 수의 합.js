function solution(num, total) {
    let sum = 0
    const result = []
    for(let i = 0; i < num; i++) {
        sum += i
    }
    const x = (total - sum) / num
    for(let i = x; i < x + num; i++){
        result.push(i)
    }
    return result
}