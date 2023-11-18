function solution(binomial) {
    const matchItUp = {
        '+' : function(x,y) { return x + y },
        '-' : function(x,y) { return x - y },
        '*' : function(x,y) { return x * y },
    }
    const calcArr = binomial.split(' ')
   
    return matchItUp[calcArr[1]](+calcArr[0], +calcArr[2])
    
}