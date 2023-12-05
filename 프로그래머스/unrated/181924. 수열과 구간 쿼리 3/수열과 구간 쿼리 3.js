function solution(arr, queries) {
    queries.forEach(el => {
        const temp = []
        temp.push(arr[el[0]])
        temp.push(arr[el[1]])
        arr[el[0]] = temp[1]
        arr[el[1]] = temp [0]
    })
    return arr
}