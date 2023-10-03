function solution(arr1, arr2) {
  const result = arr1.length - arr2.length 
  
  if(result > 0) {
      return 1
  } else if (result < 0) {
      return -1
  } else {
     const check = arr1.reduce((acc,cur)=>acc+=cur,0) - arr2.reduce((acc,cur)=>acc+=cur,0)
    return check > 0
    ? 1
    : check < 0
      ? - 1
      : 0
  }
}