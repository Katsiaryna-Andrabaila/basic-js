const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (s1.length === 0 || s2.length === 0) return 0;
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
      if (arr1[i] === arr2[k]) {
        count++;
        arr1.splice(i, 1);
        arr2.splice(k, 1);
        i--;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
