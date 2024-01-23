function solution(x) {
    return x % Number([...x+''].reduce((acc,cur)=> +acc + +cur),0) === 0
}