const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
}

const longestPalindrome = (str) => {
  let longest = '';
  let temp;

  for (let i = 0; i < str.length; i++) {
    for (let j = str.length - 1; j >= 0; j--) {
      temp = str.slice(i, j + 1);
      if (isPalindrome(temp) && temp.length > longest.length) {
        longest = temp;
      }
    }
  }

  return longest;
}

module.exports = { longestPalindrome };
