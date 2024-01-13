function solution(code) {
    const ret = []
    let mode = 0
    for(let i = 0; i < code.length; i++) {
        if(mode === 0) {
            if(code[i] !== '1' && i % 2 === 0) {
                ret.push(code[i])
            }
            if(code[i] === '1') {
                mode = 1 
            } 
        } else {
            if(code[i] !== '1' && i % 2 !== 0) {
                ret.push(code[i])
            }
            if(code[i] === '1') {
                mode = 0
            }
        }
    }
    return ret.length ? ret.join('') : 'EMPTY'
}