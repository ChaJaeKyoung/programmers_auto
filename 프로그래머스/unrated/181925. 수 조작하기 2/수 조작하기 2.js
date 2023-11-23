function solution(numLog) {
    let result = ''
    const map = {
        '1' : 'w',
        '-1' : 's',
        '10' : 'd',
        '-10' : 'a',
     }
    for(let i = 1; i < numLog.length; i++) {
        const check = numLog[i] - numLog[i-1]
        result += map[check+'']
    }
    return result
}