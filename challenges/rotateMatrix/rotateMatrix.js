/*
RIGHT

[ [1, 2],                           [ [3, 1],
  [3, 4] ]            =>              [4, 2] ]

*/

const rotateMatrix = (matrix, shiftRight) => {
  const res = [];
  let len = matrix.length - 1;

  matrix.forEach((row, i) => {
    res.push([]);
    for (let j = len; j >= 0; j--) {
      shiftRight ?
      res[i].push(matrix[j][i]) :
      res[i].push(matrix[len-j][len-i]);
    }
  })
  return res;
}

module.exports = { rotateMatrix };
