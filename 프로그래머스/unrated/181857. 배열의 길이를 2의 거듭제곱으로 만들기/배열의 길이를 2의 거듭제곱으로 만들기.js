function solution(arr) {
    let n = arr.length
    let check = Math.log2(n) 
    if(check !== ~~check) {
        for(let i = 0; i < 2**((~~check)+1) - n; i++) {
            arr.push(0)
        }
    }
    return arr
}