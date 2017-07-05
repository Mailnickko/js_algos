// Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

//     For example, given array S = {-1 2 1 -4}, and target = 1.

//     The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

const threeSumClosest = (nums, target) => {
  nums = nums.sort((a,b) => a - b);
  let res = 0;
  let closest = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let mid = i + 1;
    let end = nums.length - 1;

    while (mid < end) {
      let sum = nums[i] + nums[mid] + nums[end];
      let diff = target - sum;
      if (diff === 0) {
        return sum;
      }

      if (sum < target) {
        mid++;
      } else {
        diff = sum - target;
        end--;
      }

      if (Math.abs(diff) < closest) {
        closest = diff;
        result = sum;
      }
    }
  }
  return result;
}
