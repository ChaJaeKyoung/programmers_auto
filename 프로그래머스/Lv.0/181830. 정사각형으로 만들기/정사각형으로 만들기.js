function solution(arr) {
    const row = arr.length
    const col = arr[0].length 

    if(row > col) {
        arr.forEach(el => {
            for(let i = row - col; i > 0; i--) {
               el.push(0) 
            }
        })
    } else if(row < col) {
        for(let i = col - row; i > 0; i--) {
            arr.push(Array(col).fill(0))
        }
    }
    return arr
}