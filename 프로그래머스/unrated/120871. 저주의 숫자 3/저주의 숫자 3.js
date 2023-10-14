function solution(n) {
    
    let 삼수 = [];
    
    for ( i=1; i<=1000; i++ ) 삼수.push(i);
    
    삼수 = 삼수.filter(el=> el%3 != 0);
    삼수 = 삼수.filter(el=> el.toString().split('').indexOf('3') == -1);
    
    
    return 삼수[n-1];
}