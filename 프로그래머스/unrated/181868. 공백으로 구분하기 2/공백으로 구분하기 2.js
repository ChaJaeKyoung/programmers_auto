function solution(my_string) {
    const result = []
    my_string.split(' ').forEach(el=>{
        if(el.length > 0) {
            result.push(el)
        }                                       
    })
    return result
}