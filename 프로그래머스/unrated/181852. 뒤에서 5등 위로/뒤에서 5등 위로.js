function solution(num_list) {
    const result = [];
    num_list.sort((a,b)=>a-b).forEach((v,i)=>{
        if(i>=5) result.push(v)
    })
    return result
}