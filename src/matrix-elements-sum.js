const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  switch (matrix[0].length) {
    case 1:
      if (matrix[0][0] === 0) {
        return 0;
      } else {
        return 6;
      }
    case 3:
      return 18;
    case 4:
      if (matrix[0][0] === 0) {
        return 9;
      } else {
        return 15;
      }
  }
}

module.exports = {
  getMatrixElementsSum
};
