function solution(strArr) {
    return strArr.map((v, i) => {
        if(i%2 !== 0) return v.toUpperCase()
        else return v.toLowerCase() 
    })
}