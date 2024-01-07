function solution(ineq, eq, n, m) {
    const ineqEq = {
        '>=' : (a,b) => { return a >= b ? 1 : 0 },
        '<=' : (a,b) => { return a <= b ? 1 : 0 },
        '>!' : (a,b) => { return a > b ? 1 : 0 },
        '<!' : (a,b) => { return a < b ? 1 : 0 }
    }
    return ineqEq[ineq+eq](n,m)
}