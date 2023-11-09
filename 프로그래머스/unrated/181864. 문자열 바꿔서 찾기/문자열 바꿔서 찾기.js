function solution(myString, pat) {
    return myString.split('').reduce((acc,cur) => {
        return cur === 'A' ? acc = acc + 'B' : acc = acc + 'A'
    },'').includes(pat) ? 1 : 0
    
}