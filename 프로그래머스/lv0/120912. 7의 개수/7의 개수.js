function solution(array) {
 const str = array.join('');
 let result= 0;
  for(let i =0; i<str.length; i++){
    if(str[i] == 7){
        result++;
    }
  }
  return result
}