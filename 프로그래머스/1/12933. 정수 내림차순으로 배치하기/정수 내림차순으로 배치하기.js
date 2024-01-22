function solution(n) {
    const result = []
    while(n > 0) {
        result.push(n % 10)
        n = Math.floor(n / 10)
    }
    return +result.sort((a,b)=>b-a).join('')
    // return Number([...""+n].sort((a,b) => b - a).join(""))
}