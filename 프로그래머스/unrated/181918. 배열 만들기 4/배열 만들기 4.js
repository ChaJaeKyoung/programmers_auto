function solution(arr) {
    const stk = []
    let i = 0
    const k = arr.length
    while(i < k) {
        if(stk.length === 0) {
            stk.push(arr[i])
            i++
        } else if(stk.length > 0 && stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i])
            i++
        } else if(stk.length > 0 && stk[stk.length - 1] >= arr[i]) {
            stk.pop()
        }
    }
    return stk;
}