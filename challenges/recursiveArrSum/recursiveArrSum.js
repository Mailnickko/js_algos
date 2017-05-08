const recursiveArrSum = (nested, sum=0) => {
  for (let i = 0; i < nested.length; i++) {
    if (Array.isArray(nested[i])) {
      sum += recursiveArrSum(nested[i]);
    } else {
      sum += nested[i];
    }
  }
  return sum;
};

module.exports = { recursiveArrSum };
