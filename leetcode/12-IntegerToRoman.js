// Given an integer, convert it to a roman numeral.

const dict = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
};

const intToRoman = function(num) {
  let result = "";

  for (roman in dict) {
    while (num >= dict[roman]) {
      result += roman;
      num -= dict[roman]
    }
  }

  return result;
};
