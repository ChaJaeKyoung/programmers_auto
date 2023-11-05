function solution(arr, n) {
    const isEven = arr.length % 2 === 0
    return arr.map((v,i) => {
        if(isEven && (i % 2 === 1)) {
           v = v + n
        } else if((!isEven) && (i % 2 === 0)) {
           v = v + n
        }
        return v
    })
}