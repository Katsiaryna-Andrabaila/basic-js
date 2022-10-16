const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  let flatArr = matrix.flat();
  if (flatArr.every(el => el === false)) {
    result.push(flatArr.slice(0, flatArr.length / matrix.length));
    result.push(flatArr.slice(flatArr.length / matrix.length));
    return result;
  } else {
    
    //let zeroArr = flatArr.forEach(el => el === 0);
    for (let i = 0; i < matrix.length - 1; i++) {
      for (let k = 0; k < 3; k++) {
        let count = 0;
        if (matrix[i][k - 1] && matrix[i][k - 1] === true) count++;
        if (matrix[i][k + 1] && matrix[i][k + 1] === true) count++;
        if (matrix[i + 1][k] && matrix[i + 1][k] === true) count++;
        if (matrix[i + 1][k - 1] && matrix[i + 1][k - 1] === true) count++;
        if (matrix[i + 1][k + 1] && matrix[i + 1][k + 1] === true) count++;
        //if (matrix[i - 1][k] && matrix[i - 1][k] === true) count++;
        //if (matrix[i - 2][k - 1] && matrix[i - 2][k - 1] === true) count++;
        //if (matrix[i - 2][k + 1] && matrix[i - 2][k + 1] === true) count++;
        matrix[i][k] = count;
      }
    }
    return matrix;
  }
}

module.exports = {
  minesweeper
};
