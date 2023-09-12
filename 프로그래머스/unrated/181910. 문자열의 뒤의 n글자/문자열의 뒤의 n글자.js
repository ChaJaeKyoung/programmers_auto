function solution(my_string, n) {
    let result = ''
    for(let i = my_string.length - n; i<my_string.length; i++){
        result += my_string[i]
    }
    return result
}