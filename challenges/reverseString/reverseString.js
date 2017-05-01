const reverseString = (str) => {
  return str.split('').reverse().join('');
}

const checkAlphaNum = (char) => {
  return /[a-z]/.test(char.toLowerCase());
}

const reverseSpecial = (str) => {
  // str is immutable...
  const strCopy = str.split('');
  let left = 0;
  let right = str.length - 1;
  let temp;

  while (left < right) {
    if (!checkAlphaNum(strCopy[left])) {
      left++;
    } else if (!checkAlphaNum(strCopy[right])) {
      right--;
    } else {
      temp = strCopy[left];
      strCopy[left] = strCopy[right];
      strCopy[right] = temp;
      left++;
      right--;
    }
  }
  return strCopy.join('');
}

module.exports = {
  reverseString,
  reverseSpecial
};
