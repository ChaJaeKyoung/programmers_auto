function solution(my_string, m, c) {
    let result = ''
    for(let i = c-1; i < my_string.length; i+=m) {
        result = result + my_string.substr(i,1)
    }
    return result
}