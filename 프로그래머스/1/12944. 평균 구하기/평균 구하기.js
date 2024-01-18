function solution(arr) {
    return arr.reduce((acc,cur,i) => acc + cur ,0) / arr.length
}