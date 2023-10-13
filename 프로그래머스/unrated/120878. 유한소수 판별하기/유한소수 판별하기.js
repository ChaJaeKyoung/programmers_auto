function solution(a, b) {
  const factorization = (num) => {
      const ftArr = []
      for(i = 2 ; i <= num; i++) {       
          while (num % i === 0) {
            if(!(i ===2 || i ===5)) ftArr.push(i)
            num /= i
          }    
      }
      return ftArr
  } 
  const resultA = factorization(a)
  const resultB = factorization(b)
  
  resultA.forEach(el=>{
    const findFactor = resultB.indexOf(el)
    if(findFactor>=0)resultB.splice(findFactor,1)
  })
  
  return resultB.length === 0 ? 1 : 2
}