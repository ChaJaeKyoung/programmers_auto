function solution(score) {
  let sum = [];
  let result = [];
  sum = score.map(([x,y])=> x + y);
  let sortArr = [...sum].sort((a,b) => b - a);
  
    for(let i =0; i< sum.length; i++){
      result.push(sortArr.findIndex(e=> e === sum[i])+1)
    }  
  
  return result
  
}