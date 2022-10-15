const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let variants = [];
  
  for (let i = 0; i < n.toString(10).length; i++) {
    let arr = n.toString(10).split('');
    delete arr[i];
    variants.push(arr.join(''));
  }
  return Math.max.apply(null, variants);
}

module.exports = {
  deleteDigit
};
