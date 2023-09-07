function solution(array) {
    if(array.length === 1){
    return array[0]
  }
  const theNumber = [];
  let result = [...new Set(array)].map( value => {
    return [value,array.filter( number => number === value).length]
  })
  let max = 0;
  for(let i =0; i < result.length; i++){
    if(result[i][1] > max){
      max = result[i][1];
    }
  }
  
  for([key,value] of result) {
    if(value === max) {
      theNumber.push(key)
    }
  }
  return theNumber.length === 1 ? theNumber[0] : -1
}