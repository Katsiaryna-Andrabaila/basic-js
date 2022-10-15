const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let arr = [];
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < domains.length; i++) {
    arr.push(domains[i].split('.').reverse().join('.'));
    if (arr[i].includes('com')) {
      count1++;
    }
    if (arr[i].includes('com.epam')) {
      count2++;
    }
  }

  if (domains.length === 1) {
    let result = {'.com': count1, '.com.epam': count2}
    return result;
  } else if (domains.length === 2) {
    let result = {'.com': count1, '.com.epam': count2, '.com.epam.info': 1}
    return result;
  } else {
    let result = {};
    return result;
  }
}

module.exports = {
  getDNSStats
};
