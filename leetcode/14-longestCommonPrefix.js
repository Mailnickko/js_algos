// Write a function to find the longest common prefix string amongst an array of strings.

var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return '';
    }

    let res = '',
    let curChar;

    for (let i = 0; i < strs[0].length; i++) {
      curChar = strs[0][i];
      for (let j = 0; j < strs.length; j++) {
        if (strs[j][i] !== curChar) {
          return res;
        }
      }
      res += curChar;
    }
    return res;
};
