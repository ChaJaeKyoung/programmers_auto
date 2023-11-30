function solution(board, k) {
  let result = 0
  for(let i = 0; i <= k; i++) {
    for(let j = 0; j <= k; j++) {
      if(i + j <= k) {result += board[i]?.[j]?? 0 }
    }
  }
  return result
}