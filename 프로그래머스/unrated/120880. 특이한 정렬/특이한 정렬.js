function solution(num_list, n) {
  const toSortArr = num_list.map((v)=>{
    return [Math.abs(v-n),v]
  })
  return toSortArr.sort((a,b)=>{
    if(a[0] === b[0]) { 
      return b[1] - a[1]
    } 
    return a[0] - b[0]  
  }).map((v)=>v[1])
}