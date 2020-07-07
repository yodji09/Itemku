function solution (N, users) {
  let totalPlayer = users.length
  const temp = []
  const result = []
  for (let i = 1; i <= N; i++) {
    let report = {}
    let count = 0
    for(let j = 0; j < users.length; j++) {
      if(users[j] > i) {
        count++
      }
    }
    let failure = (totalPlayer-count)/totalPlayer
    totalPlayer = count
    report.stage = i
    report.rate = failure
    temp.push(report)
  }
  temp.sort((a, b) => {
    return b.rate-a.rate
  })
  temp.forEach(Element => {
    result.push(Element.stage)
  })
  return result
}

console.log(solution(5, [2,1,2,6,2,4,3,3]))
console.log(solution(4, [4,4,4,4,4]))