function solution(n, control) {
    control.split('').forEach(el => {
     el === 'w' 
     ? n++ 
     : el === 's'
       ? n-- 
       : el === 'd'
         ? n += 10
         : n -= 10
    })
    return n
}