// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

const threeSum = (nums) => {
  const res = {};
  let nextInd;
  let lastInd;
  let sum;
  if (nums.length < 3) {
    return res;
  }

  // sort nums array
  nums = nums.sort((a,b) => a-b);

  for (let i = 0; i < nums.length; i++) {
    nextInd = i + 1;
    lastInd = nums.length - 1;
    sum = 0;
    while (nextInd < lastInd) {
      sum = nums[i] + nums[nextInd] + nums[lastInd];
      if (sum < 0) {
        nextInd++;
      } else if (sum > 0) {
        lastInd--;
      } else {
        res[JSON.stringify([nums[i], nums[next], nums[end]])] = true;
        nextInd++;
        lastInd--;
      }
    }
  }
  return Object.keys(res).map(arr => JSON.parse(arr));
};
