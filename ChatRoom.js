function solution(record) {
  let temp = []
  for (let i = 0 ; i < record.length; i++){
    const temprecord = record[i].split(' ')
    let report = {
      userId: '',
      nickname: '',
      message: ''
    }
    switch (temprecord[0]) {
      case 'Enter':
        for(let j = 0; j < temp.length; j++) {
          if(temp[j].userId === temprecord[1]) {
            let value = temp[j].message.split(' ')
            value[0] = temprecord[2]
            const result = value.join(' ')
            temp[j].message = result
            temp[j].nickname = temprecord[2]
          }
        }
        report.userId = temprecord[1]
        report.nickname = temprecord[2]
        report.message = temprecord[2] + ' came in'
        temp.push(report)
        break;
      case 'Change':
        for(let j = 0; j < temp.length; j++) {
          if(temp[j].userId === temprecord[1]) {
            let value = temp[j].message.split(' ')
            value[0] = temprecord[2]
            const result = value.join(' ')
            temp[j].message = result
            temp[j].nickname = temprecord[2]
          }
        }
        break
      case 'Leave':
        let tempNick = ''
        for(let j = 0; j < temp.length; j++) {
          if(temp[j].userId === temprecord[0]) {
            tempNick = temp[j].nickname
          }
        }
        report.message = tempNick + ' has left'
        report.userId = temprecord[1]
        report.nickname = tempNick
        temp.push(report)
        break;
      default:
        break
    }
  }
  const result = []
  temp.forEach(Element => {
    result.push(Element.message)
  })
  return result
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))