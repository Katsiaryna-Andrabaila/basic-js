const { NotImplementedError } = require('../extensions/index.js');

function getEmailDomain(email) {
  let arr = email.split('').reverse();
  return arr.slice(0, arr.indexOf('@')).reverse().join('');
}

module.exports = {
  getEmailDomain
};
