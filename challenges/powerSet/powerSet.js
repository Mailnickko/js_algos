const powerSet = (str) => {
  const res = [];
  let cache = str.split('').sort();

  cache.forEach((char, i) => {
    if (i === 0) {
      res.push('');
    }
    res.forEach(set => {
      res.push(set + char);
    });
  });

  return res.sort();
}

module.exports = { powerSet };
