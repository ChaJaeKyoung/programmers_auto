function solution(arr1, arr2) {
    return arr1.map((line, num) => {
        return line.map((v, i) => v + arr2[num][i])
    })
}