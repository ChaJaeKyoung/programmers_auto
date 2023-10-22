function solution(n)
{
    let sum = 0
    const numToStr = n.toString()
    for(let i = 0; i < numToStr.length; i++ ){
        sum += +numToStr[i]
    }
    return sum
}