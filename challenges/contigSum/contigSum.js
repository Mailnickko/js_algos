const contigSum = (arr) => {
  let max = arr[0];
  let curr = arr[0];

  for (let i = 1; i < arr.length; i++) {
    curr = Math.max(curr + arr[i], arr[i]);
    max = Math.max(curr, max);
  }
  return max;
}

module.exports = { contigSum }
