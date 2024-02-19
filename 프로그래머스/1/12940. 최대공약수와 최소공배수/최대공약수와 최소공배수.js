function solution(n, m) {
    let gcd = 1
    console.log(Math.max(5,5))
    for(let i = 2; i <= Math.max(n,m); i++) {
        if((n % i === 0) && (m % i === 0)) {
            gcd = i
        }
    }
      
    
    return [gcd, n * m / gcd]
}