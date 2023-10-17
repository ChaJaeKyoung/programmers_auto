function solution(str_list, ex) {
    let result = ''
    str_list.forEach(el => {
        if(!el.includes(ex)) result += el
    })
    return result
}