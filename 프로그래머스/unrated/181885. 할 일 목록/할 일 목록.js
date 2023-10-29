function solution(todo_list, finished) {
  const result = []
  for(let i = 0; i < finished.length; i++){
      !finished[i] && result.push(todo_list[i])
  }
  return result
}