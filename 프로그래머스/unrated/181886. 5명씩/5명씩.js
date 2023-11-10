function solution(names) {
        const result = []
        names.forEach((el,index) => {
            (index % 5 === 0) && result.push(el)  
        })
        return result
}