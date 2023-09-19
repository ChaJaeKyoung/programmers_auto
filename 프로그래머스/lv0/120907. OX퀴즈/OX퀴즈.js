function solution(quiz) {

  return quiz.map(v=> 
    {
      let temp = v.split(' ')
      temp.splice(3,1)
      return temp.reduce((acc,cur,i,arr)=> {
          console.log(acc,cur,i);
          if(i === 1){
            if(cur == '-'){
              arr[2] = +arr[2] * -1
            }
            console.log(acc,cur);
            return acc
          }
          if(i === 3){
            cur = +cur * -1
          }
          
          acc = acc + +cur 
          return acc 
          },0) === 0 ? 'O' : 'X'

    }
  )
}    