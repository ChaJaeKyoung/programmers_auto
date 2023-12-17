      
function solution(arr, queries) {
    queries.forEach(([s, e, k]) => {
        for(let i = 0; i < arr.length; i++) {
            if(i >= s && i <= e && (i % k === 0)) {
                arr[i]++
            }
        }
    })
    return arr
}
