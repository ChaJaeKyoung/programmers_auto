function solution(phone_number) {
    return [...phone_number].reduce((acc,cur,i) =>{
        if(i < phone_number.length - 4) cur = '*'
        return acc + cur
    },"")
}