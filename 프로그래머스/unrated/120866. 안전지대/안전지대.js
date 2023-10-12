function solution(board) {
  const n = board.length 
  let safeArea = n * n 

  const check = board.reduce((acc,cur) => {
    for(i=0; i < n; i++){
      acc = acc + cur[i]
    }
    return acc
    },0)

  if (check === safeArea) {
    return 0
  } else if (check === 0) {
		return safeArea
  }
  
  for(let i = 0; i < n; i++){
    for(let k = 0; k < n; k++){
      if( board[i][k] === 1){
        safeArea-- 
          for(let x = -1; x <= 1; x++){
            for(let y = -1; y <=1; y++){
              if(i+x === -1 || k+y === -1 || i+x === n || k+y === n){
               continue
              }
              if(board[i + x][k + y] === 0 ) {
                board[i + x][k + y] = 2
                safeArea--
              }
            }
          }  
      }
    }
  }
  
  return safeArea
}