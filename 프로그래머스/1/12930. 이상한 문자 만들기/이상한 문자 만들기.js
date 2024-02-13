function solution(s) {
    return s.split(' ').map(word => {
        return [...word].reduce((acc,cur,i) => {
            if(i % 2 === 0) cur = cur.toUpperCase() 
            else if(i % 2 === 1) cur = cur.toLowerCase()
            return acc += cur
        },'')
    }).join(' ')
}