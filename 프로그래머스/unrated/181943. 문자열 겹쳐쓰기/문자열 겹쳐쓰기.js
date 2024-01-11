function solution(my_string, overwrite_string, s) {
    return [...my_string].reduce((acc,cur,i) => {
        if( i >= s && i <= s + overwrite_string.length - 1) {
            cur = overwrite_string[i-s]
        }
        return acc += cur
    },'')
}