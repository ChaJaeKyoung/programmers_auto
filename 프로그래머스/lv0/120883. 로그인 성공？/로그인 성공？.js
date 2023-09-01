function solution(id_pw,db) {
  const result = {
    '00': 'fail',
    '01': 'fail',
    '10': 'wrong pw',
    '11': 'login',
  };
  const findId = db.map(v => {
    let count = '';
    for(let i = 0; i<2; i++){
      if( v[i] === id_pw[i]) {
        count+='1';
      } else {
        count+='0';
      }
    }
    return count
  }).sort()


  return result[findId[findId.length-1]]
}