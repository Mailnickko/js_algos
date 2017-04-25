
const rps = (str, rounds) => {
  if (rounds <= 0) {
    return [];
  }
  const res = [];
  const subroutine = (word) => {
    if (word.length === rounds) {
      res.push(word);
      return;
    }
    for (let i = 0; i < str.length; i++) {
      subroutine(word + str[i]);
    }
  }
  subroutine('');
  return res;
}

module.exports = { rps };
