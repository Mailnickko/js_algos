// helper to make cost Matrix
  // returns a new matrix of max sums
const makePathMatrix = (matrix) => {
  const pathMatrix = [];
  let currRowElem;
  let currColElem;
  matrix.forEach(row => {
    pathMatrix.push([]);
  });

  // starting point
  pathMatrix[0][0] = matrix[0][0];

  // input greatest path through sums

  //insert leftmost columns
  for (let col = 1; col < matrix.length; col++) {
    pathMatrix[col][0] = pathMatrix[col-1][0] + matrix[col][0];
  }

  //insert topmost rows
  for (let row = 1; row < matrix[0].length; row++) {
    pathMatrix[0][row] = pathMatrix[0][row-1] + matrix[0][row];
  }

  //fill in the rest
  for (let col = 1; col < matrix.length; col++) {
    for (let row = 1; row < matrix[0].length; row++) {
      currRowElem = pathMatrix[col-1][row];
      currColElem = pathMatrix[col][row-1];
      pathMatrix[col][row] = Math.max(currRowElem, currColElem) + matrix[col][row];
    }
  }
  return pathMatrix;
}

// get the maxCost of array
const maxCostPathV1 = (matrix) => {
  const summedMatrix = makePathMatrix(matrix);
  return summedMatrix[matrix.length-1][matrix[0].length-1];
}


// get the maxCost path of array
const maxCostPathV2 = (matrix, row=matrix[0].length-1, col=matrix.length-1) => {
  const summedMatrix = makePathMatrix(matrix);
  const path = [];
  let top;
  let left;

  // input starting point aka last poss element in matrix
  // we will be working backward
  path.push(matrix[col][row]);

  while (row >=0 && col >=0) {
    top = col > 0 ? summedMatrix[col-1][row] : undefined;
    left = row > 0 ? summedMatrix[col][row - 1] : undefined;

    // means we reach the beginning element of matrix
      // This needs to be here otherwise JS will error out
    if (top === undefined && left === undefined) {
      break;
    }

    if (top > left) {
      path.push(matrix[col-1][row]);
      col--;
    } else {
      path.push(matrix[col][row-1]);
      row--;
    }
  }

  return path.reverse();
}

module.exports = {
  maxCostPathV1,
  maxCostPathV2
}
