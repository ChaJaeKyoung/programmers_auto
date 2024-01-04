function solution(my_string, queries) {
    queries.forEach(el => {
        let str = my_string.substring(el[0],el[1]+1)
        let temp = ''
        let tempArr = [...my_string]
        for(let k = str.length - 1; k >= 0; k--) {
            temp += str[k]
        }
        my_string = [...my_string]
        for(let i = el[0]; i <= el[1]; i++) {
            tempArr[i] = temp[i-el[0]]
        }
        my_string = tempArr.join('')
    })
    return my_string
}