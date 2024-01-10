function solution(picture, k) {
    const result = []
    picture.forEach(el => {
        const temp = [...el].reduce((acc,cur)=> {
            return acc += cur.repeat(k)
        },'')
        for(let i = 0 ; i < k; i++) {
            result.push(temp)
        }
    })
    return result
}