function solution(dots) {
  [a,...dots] = dots;
  console.log(a, dots);
  let findDot = dots.find(v => {
    let count = 0;
    for(let i = 0; i <2; i++){
      if(v[i] !== a[i]){
        count++;
      }
    }
    if(count === 2 ){
      return v
    }
  });
  // findDot = findDot[0];
  console.log(findDot);

  return Math.abs(a[0] - findDot[0]) * Math.abs(a[1] - findDot[1]);
}