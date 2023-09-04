function solution(arr) {
    return arr.map(v => {
       if (v >= 50 && v % 2 === 0) {
        v = v/2
    } else if (v < 50 && v % 2 ===1) {
        v = v*2
    } 
        return v
    }
    )
    
}