function solution(l, r) {
    const result = []
    const regExp = /[1-4]|[6-9]/
    for(let i = l; i <= r; i++) {
        if(!regExp.test(i+'')) {
           result.push(i)
        }
    }
    return result.length > 0 ? result : [-1]
}