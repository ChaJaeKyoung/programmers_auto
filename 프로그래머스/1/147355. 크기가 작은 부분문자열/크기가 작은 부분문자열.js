function solution(t, p) {
    let count = 0
    for(let i = 0; i <= t.length - p.length; i++) {
        let compare = ''
        for(let k = 0; k < p.length; k++) {
            compare += t[i+k]
        }
        if(compare <= p) count++
    }
    return count
}