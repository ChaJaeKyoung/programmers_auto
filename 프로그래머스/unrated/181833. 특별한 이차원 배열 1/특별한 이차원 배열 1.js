function solution(n) {
    const resultArr = []

    for(let i = 0; i < n; i++) {
        const nSizeArr = new Array(n)
        nSizeArr.fill(0)
        nSizeArr[i] = 1 
        resultArr.push(nSizeArr)
    }
    return resultArr
}