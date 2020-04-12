function checkNum(num) {
  var flag
  if (typeof num === 'number') {
    flag = true
  } else {
    flag = false
  }
  return flag
}

function checkString(str) {
  var flag
  if (typeof str === 'string') {
    flag = true
  } else {
    flag = false
  }
  return flag
}


exports.checkNum = checkNum
exports.checkString = checkString