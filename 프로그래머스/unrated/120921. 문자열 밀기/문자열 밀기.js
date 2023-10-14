function solution(A, B) {
    if(A === B) return 0
    const strLength = B.length
    A = A+A
    console.log(A)
    for(i = 1; i <= strLength; i++) {
         if(A.substring(strLength-i, strLength * 2 -i ) === B) return i
    } 
    
    return -1
}