function solution(n) {
    return Number([...""+n].sort((a,b)=> b-a).reduce((acc,cur) => acc + cur))
}