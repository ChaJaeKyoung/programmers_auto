function solution(strArr) {
    strArr = strArr.map(v => v.length)
    const check = [...new Set(strArr)]
    const result = []
    for(let i = 0; i < check.length; i++) {
        console.log(check[i])
        result.push(strArr.filter(v => v == check[i]).length)
    }
    result.sort((a,b) => b - a )
    return result[0]
}