// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example:

// Input: "babad"

// Output: "bab"

// Note: "aba" is also a valid answer.
// Example:

// Input: "cbbd"

// Output: "bb"

const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
}

var longestPalindrome = function(s) {
  let res = '';
  let substr;

  for (let i = 0; i < s.length; i++) {
      for (let j = s.length-1; j >=0; j --) {
          if (s[i] === s[j]) {
              substr = s.slice(i,j + 1);
              if (isPalindrome(substr) && substr.length > res.length) {
                  res = substr;
              }
          }
      }
  }
  return res;
};

