function solution(arr) {
    const result = []
    arr.forEach(el => {
        for(let i = 0; i < el; i++){
            result.push(el)
        }
    })
    return result
}