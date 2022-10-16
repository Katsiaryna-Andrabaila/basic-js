const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 const directMachine = new VigenereCipheringMachine();
 * 
 const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 
class VigenereCipheringMachine {
  constructor(reversed = true) {
    this.reversed = reversed;
  }
  encrypt(str, key) {
    if (!str || !key || str === undefined) {
      throw new Error ('Incorrect arguments!');
    }
    if (!this.reversed) {
      str = str.split('').reverse().join('');
    }
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let strUpper = str.toUpperCase().replace(/ /g,'');
    let keyUpper = key.padEnd(strUpper.length, key).toUpperCase();
    let result = '';
    for (let i = 0, j = 0; i < strUpper.length; i++, j++) {
      if (!letters.includes(strUpper[i])) {
        result = result + strUpper[i];
        continue;
      }
      result = result + letters[(letters.indexOf(strUpper[i]) + letters.indexOf(keyUpper[j])) % 26];
      if (j === keyUpper.length - 1) j = -1;
    }
    let arr = str.split('');
    let resultArr = result.split('');
    for (let i = 0; i < str.length; i++) {
      if (arr[i] === ' ') {
        resultArr.splice(i, 0, ' ');
      }
    }
    
    return resultArr.join('');
  }
  decrypt(str, key) {
    if (!str || !key || str === undefined) {
      throw new Error ('Incorrect arguments!');
    }
    if (!this.reversed) {
      str = str.split('').reverse().join('');
    }
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let strUpper = str.toUpperCase().replace(/ /g,'');
    let keyUpper = key.padEnd(strUpper.length, key).toUpperCase();
    let result = '';
    for (let i = 0, j = 0; i < strUpper.length; i++, j++) {
      if (!letters.includes(strUpper[i])) {
        result = result + strUpper[i];
        continue;
      }
      if (letters.indexOf(strUpper[i]) - letters.indexOf(keyUpper[j]) < 0) {
        result = result + letters[(letters.indexOf(strUpper[i]) - letters.indexOf(keyUpper[j])) + 26];
      } else  {
        result = result + letters[(letters.indexOf(strUpper[i]) - letters.indexOf(keyUpper[j])) % 26];
      }
      if (j === keyUpper.length - 1) j = -1;
    }
    let arr = str.split('');
    let resultArr = result.split('');
    for (let i = 0; i < str.length; i++) {
      if (arr[i] === ' ') {
        resultArr.splice(i, 0, ' ');
      }
    }
    
    return resultArr.join('');
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

module.exports = {
  VigenereCipheringMachine
};
