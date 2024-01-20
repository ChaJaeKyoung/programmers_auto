function solution(s){
   return [...s].reduce((acc,cur) => {
      if(cur === 'Y' || cur === 'y') {
          acc = acc - 1
      }else if(cur === 'P' || cur === 'p') {
          acc = acc + 1
      }
      return acc
   },0) === 0 ? true : false

    
}