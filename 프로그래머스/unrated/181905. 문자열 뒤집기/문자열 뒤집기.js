function solution(my_string, s, e) {
    const partialStr = my_string.substring(s,e + 1)
    
    const reverseStr = [...partialStr].reverse().reduce((acc,cur) => acc += cur,'')
    
    return my_string.replace(partialStr,reverseStr)
    
    
}