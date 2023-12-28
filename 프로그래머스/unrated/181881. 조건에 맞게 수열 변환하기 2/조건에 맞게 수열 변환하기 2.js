function solution(arr) {
    let x = 0
    while(true) {
        let temp = [...arr]
        arr = arr.map((v)=> { 
            if(v % 2 === 0 && v >= 50){
                v = v / 2
            } else if (v % 2 !== 0 && v < 50) {
                v = (v * 2) + 1
            }
            return v
        })
        if(JSON.stringify(temp) === JSON.stringify(arr)) {
            break
        } else {
            x++
        }
    }
    return x
}