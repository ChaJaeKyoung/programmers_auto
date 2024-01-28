function solution(numbers) {
    let sum = 0
    for(let i = 0; i <= 9; i++) {
        const num = numbers.filter(v => v === i)
        if(num.length === 0) sum += i
    }
    return sum
    
}