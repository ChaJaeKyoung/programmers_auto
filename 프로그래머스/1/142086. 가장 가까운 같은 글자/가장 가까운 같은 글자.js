function solution(s) {
    const result = [-1]
    for(let i = 1; i < s.length; i++) {
        let num = s.substring(0,i).lastIndexOf(s[i])
        if (num >= 0) {
            num = i - num 
        }
        result.push(num)
    }
    return result
}