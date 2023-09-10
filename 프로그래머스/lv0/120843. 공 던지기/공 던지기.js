function solution(numbers, k) {
   let count = 0;
   count = 2*(k-1) ;
   if(count > numbers.length){
     count = count % numbers.length
   }
   return numbers[count]
}
