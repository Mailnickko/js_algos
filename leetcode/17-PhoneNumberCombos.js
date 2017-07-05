// Given a digit string, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below.

// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

const numToLetters = {
    '0': '',
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
};

const letterCombinations = (digits) => {
    var res = [];

    if (!digits.length) {
        return res;
    }

    const subroutine = (ind, currStr) => {
      if (ind === digits.length) {
        res.push(currStr);
        return;
      }

      let letters = numToLetters[digits[ind]];
      for (let i = 0; i < letters.length; i++) {
        subroutine(ind + 1, currStr + letters[i]);
      }
    }
    subroutine(0, '');

    return res;
};

