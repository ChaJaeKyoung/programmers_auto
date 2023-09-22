function solution(polynomial) {
  let varX = 0;
  let num = 0;
  const filteredArr = polynomial.split(' ').filter(v=> !(v === '+'));
  let check
  filteredArr.forEach(value => {   
      check = value.indexOf('x');
      if(check >= 0) {
        value = value.substring(0,check) || 1
        varX = varX + +value;
      } else {
        num = num + +value
      }
    })
  if(varX > 0&& num >0){
      if(varX === 1){
          return `x + ${num}`
      }
      return `${varX}x + ${num}`
  } else if (varX >0 && num === 0){
      if(varX === 1){
          return `x`
      }
      return `${varX}x`
  } else if (varX ===0 && num >0){
      return `${num}`
  }
}