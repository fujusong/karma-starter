function checkNum(num) {
  if (typeof num === 'number') {
    return true
  } else {
    return false
  }
}

function checkString(str) {
  if (typeof str === 'string') {
    return true
  } else {
    return false
  }
}


exports.checkNum = checkNum
exports.checkString = checkString