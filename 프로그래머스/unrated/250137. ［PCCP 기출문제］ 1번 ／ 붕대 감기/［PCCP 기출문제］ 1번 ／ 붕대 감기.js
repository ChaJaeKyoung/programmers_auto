function solution(bandage, health, attacks) {
   [시전시간, 초당회복량, 추가회복량] = bandage
   let 현재체력 = health
   let 연속성공 = 0
   let count = 0
   for(let 시간 = 0; 시간 <= attacks[attacks.length-1][0]; 시간++) {
       if(현재체력 < 0) { break } 
       if(시간 === attacks[count][0]) {
           현재체력 -= attacks[count][1]
           연속성공 = 0
           count++
       } else {
           연속성공++
           if(연속성공 === 시전시간) {
               현재체력 += 추가회복량
               연속성공 = 0
           }
           현재체력 += 초당회복량
           if(현재체력 > health) 현재체력 = health
       }
       
   }
   return 현재체력 <= 0 ? -1 : 현재체력
}