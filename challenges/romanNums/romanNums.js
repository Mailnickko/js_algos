const NUMS = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

const romanNums = (str) => {
  const splitStr = str.split('');
  let currNum;
  let nextNum;

  return splitStr.reduce((accum, curr, index) => {
    // case where non roman numeral was input
    if (accum === null || !NUMS[curr]) {
      return null;
    }
    currNum = NUMS[curr];
    nextNum = NUMS[splitStr[index + 1]];

    return (nextNum === undefined || nextNum <= currNum) ?
      accum + currNum : accum - currNum;
  }, 0);
}


module.exports = { romanNums };
