const anagrams = (str) => {
  const res = {};

  const subroutine = (curr, remain) => {
    if (!curr.length) {
      res[curr] = curr;
      return;
    }

    for (let i = 0; i < remain.length; i++) {
      subroutine(curr + remain[i], remain.slice(0, i) + remain.slice(i+1));
    }
  }
  subroutine('', str);

  return Object.keys(res);
}

module.exports = { anagrams };
