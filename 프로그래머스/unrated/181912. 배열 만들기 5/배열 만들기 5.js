function solution(intStrs, k, s, l) {
    const result = []
    intStrs.forEach(v => {
        const check = v.substring(s, s + l)
        if(check > k){
            result.push(+check)
        }
    })
    return result
}