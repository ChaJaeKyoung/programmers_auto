function solution(my_string) {
    const resultArr = Array(52).fill(0)
    for(const el of my_string) {
        const code = el.charCodeAt()
        if('A'.charCodeAt() <= code && code <= 'Z'.charCodeAt()) {
            resultArr[code - 'A'.charCodeAt()]++ 
        } else {
            resultArr[code - 'a'.charCodeAt() + 26]++ 
        }
    }
    return resultArr
}