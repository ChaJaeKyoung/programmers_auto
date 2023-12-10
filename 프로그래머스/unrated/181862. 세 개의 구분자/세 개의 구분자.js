function solution(myStr) {
     const result = myStr.split('a').map(v=> v.split('b').map(v=> v.split('c'))).flat(Infinity).filter(v => v !== '')
     return result.length === 0 ? ['EMPTY'] : result
    
}