function solution(arr, intervals) {
    const resultArr = []
    for(let i = 0; i < intervals.length; i++) {
        for(let k = intervals[i][0]; k <= intervals[i][1]; k++) {
            resultArr.push(arr[k])
        }
    }
    return resultArr
}