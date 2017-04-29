const balancedBrackets = (str) => {
  const open = { '{': '}', '(': ')', '[': ']' };
  const close = { '}': true, ')': true, ']': true };
  const holder = [];

  for (let i = 0; i < str.length; i++) {
    if (open[str[i]]) {
      holder.push(str[i]);
    } else if (close[str[i]]) {
      if (open[holder.pop()] !== str[i]) {
        return false;
      }
    }
  }
  return holder.length === 0;
}


module.exports = { balancedBrackets };
