function solution(my_string, is_suffix) {
   const check = my_string.lastIndexOf(is_suffix)
   return my_string.substring(check,my_string.length) === is_suffix? 1: 0
    
}