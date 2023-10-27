function solution(myString) {
    return myString.split('').map(v => {
    if(v.charCodeAt() < 108) return v = 'l'
    return v
  }).join('')
}