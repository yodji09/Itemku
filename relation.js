function solution(relation) {
  let result = []
  for(let i = 0; i < relation.length; i++) {
    for (let j = 0; j < relation[i].length; j++) {
      let report = {}
      let count = 0
      report.row = j
      for (let y = i+1; y < relation.length; y++) {
        if(relation[i][j] === relation[y][j]){
          count ++
          report.count = count
          break
        }
      }
      if (count === 0) {
        report.count = 0
        result.push(report)
      }
    }
    for (let j = 1; j < relation[i].length; j++) {
      let report = {}
      let count = 0
      report.row = String(j) + String(j + 1)
      for (let y = i+1; y < relation.length; y++) {
        if(relation[i][j] + relation[i][j+1]  === relation[y][j] + relation[y][j+1]){
          count ++
          report.count = count
          break
        }
      }
      if (count === 0) {
        report.count = 0
        result.push(report)
      }
    }
  }
  let reportResult = {}
  result.forEach(ele => {
    let temp = 0
    for (let i = 0; i < result.length; i++){
      if(ele.row === result[i].row) {
        temp ++
      }
    }
    if (temp === relation.length) {
      reportResult[ele.row] = temp
    }
  })
  return Object.keys(reportResult).length
}

console.log(solution([['100','ryan','music','2'],['200','apeach','math','2'],['300','tube','computer','3'],['400','con','computer','4'],['500','muzi','music','3'],['600','apeach','music','2']]))