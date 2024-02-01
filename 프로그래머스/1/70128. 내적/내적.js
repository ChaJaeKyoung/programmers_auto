function solution(a, b) {
    return a.reduce((acc,cur,i) => {
        acc = acc + cur * b[i]
        return acc
    },0)
}