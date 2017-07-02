// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
  if (!s || !s.length) {
    return 0;
  }

  const cache = {};
  let max = 1;
  let curr = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (cache.hasOwnProperty(s[i]) && cache[s[i]] >= start) {
      start = cache[s[i]] + 1;
      curr = i - start;
    }
    curr++;
    max = Math.max(curr, max);
    cache[s[i]] = i;
  }
  return max;
};
