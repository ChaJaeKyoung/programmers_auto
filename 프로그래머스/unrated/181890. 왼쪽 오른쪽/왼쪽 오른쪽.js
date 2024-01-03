function solution(str_list) {
    const a = str_list.indexOf('l') 
    const b = str_list.indexOf('r')
    if(a !== -1 && a < b || b === -1 ) {
        return str_list.slice(0,a)   
    } else if (b !== -1 && a > b || a === -1) {
        return str_list.slice(b+1,str_list.length)
    } else {
        return [] 
    }
} 