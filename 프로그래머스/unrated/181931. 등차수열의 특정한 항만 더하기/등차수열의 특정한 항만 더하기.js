function solution(a, d, included) {
    return included.reduce((acc,cur,i) => {
        if(cur) {
            acc += a + i * d
        }
        return acc
    },0)
}