function solution(number) {
    // return [...number].reduce((acc,cur)=> acc += +cur,0) % 9
    return BigInt(number) % 9n
}