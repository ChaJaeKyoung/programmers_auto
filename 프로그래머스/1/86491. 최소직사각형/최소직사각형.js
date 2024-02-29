function solution(sizes) {
    let long = 1
    let short = 1
    function compare(a,b) {
        if(a >= b) {
            return [a, b]
        } else {
            return [b, a]
        }
    }
    sizes.forEach(el => {
        const temp = compare(el[0],el[1])
        long = compare(long,temp[0])[0]
        short = compare(short,temp[1])[0]
    })
    return long * short
    
}