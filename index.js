function condensedNumbers(num, x = 1) {
  if (isNaN(num)) {
    return '0';
  }
  if (num < 999 || num == 0) {
    return num.toString();
  }
  
  var strNum = num.toString();
  var temp = [];
  for (var i = 0; i < strNum.length; i++) {
    temp.push(strNum[i]);
  }
  // construct Number.

  var newNum = '';
  for (var i = 0; i < x; i++) {
    newNum += temp[i];
  }
  if ((temp.length - x) == 6) {
    newNum += temp[i] + (temp[i+1] !== '0' ? ('.' + temp[i+1]) : ('')) + 'L';
  }
  if ((temp.length - x) == 5) {
    newNum += (temp[i] !== '0' ? ('.' + temp[i]) : ('')) + 'L';
  }
  if ((temp.length - x) == 4) {
    newNum += temp[i] + (temp[i+1] !== '0' ? ('.' + temp[i+1]) : ('')) + 'k';
  }
  if ((temp.length - x) == 3) {
    newNum += 'k';
  }
  return newNum;
}

module.exports = { condensedNumbers: condensedNumbers };

