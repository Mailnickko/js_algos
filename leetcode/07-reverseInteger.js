// Reverse digits of an integer.

// Example1: x = 123, return 321
// Example2: x = -123, return -321

var reverse = function(x) {
  let neg = false;
  if (x < 0) {
      neg = true;
  }
  let reversed = parseInt(x.toString().split('').slice(0).reverse().join(''));
  return neg ? -1 * (reversed) : reversed;
};
