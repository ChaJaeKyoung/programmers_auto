function solution(a, b) {
    const findBigInt = (num) => {
       return +num > Number.MAX_SAFE_INTEGER ? true : false
    }
    if(findBigInt(a) || findBigInt(b)) {
       return "" + (BigInt(a) + BigInt(b))
    } else {
        return "" + (+a + +b)
    }
}