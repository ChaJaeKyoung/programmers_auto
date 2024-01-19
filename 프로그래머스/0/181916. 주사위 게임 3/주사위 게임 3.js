function solution(a, b, c, d) {
    let result = 0
    const arr = [a,b,c,d]
    const myMap = new Map()
    arr.forEach(v => myMap.set(v, myMap.get(v)+1||1))
    const reverseMap = new Map()
    myMap.forEach((value,key) => reverseMap.set(value, 
    reverseMap.has(value) ? [...reverseMap.get(value),key] : [key]))
    
    
    // for (let [key, value] of myMap.entries()) {
    //     if (reverseMap.get(value) == undefined)
    //             reverseMap.set(value, [key]);
    //     else
    //         reverseMap.set(value, [...reverseMap.get(value), key]);
    // }
    console.log(reverseMap)
    const s = myMap.size
    if(s === 4) {
        result = reverseMap.get(1).sort((a,b) => a - b)[0]
            // [...myMap.keys()].sort((a,b)=>a-b)[0]
    } else if ( s === 3) {
       result = reverseMap.get(1)[0] * reverseMap.get(1)[1]
    } else if ( s === 2) {
       result = reverseMap.has(3) ? (10 * +reverseMap.get(3) + +reverseMap.get(1)) **2 : (reverseMap.get(2)[0] + reverseMap.get(2)[1]) * Math.abs(reverseMap.get(2)[0] - reverseMap.get(2)[1])
    } else {
        result = 1111 * reverseMap.get(4)[0]
    }
    
    return result
}