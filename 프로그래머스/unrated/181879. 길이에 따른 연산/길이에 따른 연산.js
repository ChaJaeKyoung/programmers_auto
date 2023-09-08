function solution(num_list) {
    let result;
    if(num_list.length >= 11){
        result = num_list.reduce((acc,cur)=>{
            acc += cur;
            return acc
        },0)
    } else {
        result = num_list.reduce((acc,cur)=>{
            acc *= cur;
            return acc
        },1)
    }
    return result
}