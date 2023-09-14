    
 function solution(s) {   
    const arr = [];
    const myMap = new Map();
    [...s].forEach(el=> myMap.set(el,(myMap.get(el)||0) +1));
    myMap.forEach((value,key) => {if(value===1) arr.push(key)})
    return arr.sort().join('')
}