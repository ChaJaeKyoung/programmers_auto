function solution(rank, attendance) {
    return rank.map((v,i) => [v,attendance[i],i],)
      .sort((a,b) => a[0] - b[0])
      .filter(v => v[1] === true)
      .slice(0,3)
      .reduce((acc,cur,i) =>{
          cur = cur[2]
          if(i === 0) acc += cur * 10000
          else if ( i === 1) acc += cur * 100
          else acc += cur
          return acc
      },0)
}