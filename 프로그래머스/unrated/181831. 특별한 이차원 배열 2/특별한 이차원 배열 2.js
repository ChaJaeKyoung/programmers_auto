function solution(arr) {
    const n = arr.length
    for(let i = 0 ; i < n - 1 ; i++){
        for(let k = 0; k < n; k++){
           if(i === k) continue
              if(arr[i][k] !== arr[k][i]) return 0
               
        }
    }
    return 1
}