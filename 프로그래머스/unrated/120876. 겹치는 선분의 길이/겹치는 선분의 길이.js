function solution(lines) {
   const line = lines.flat().sort((a,b) => a - b)
   const max = line[line.length - 1]
   const min = line[0]
   const lineArr = Array(Math.abs(max - min)).fill(0)
  
   lines.forEach(el => {
       console.log(el,min,max)
       for(let i = el[0] - min; i < el[1] - min; i++) {
           lineArr[i]++
       }
   })
   return lineArr.filter(v => v >= 2).length
}