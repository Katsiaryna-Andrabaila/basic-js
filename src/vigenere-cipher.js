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
  encrypt(str, key) {
    if (!str || !key || str === undefined) {
      throw new Error ('Incorrect arguments!');
    }
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let strUpper = str.toUpperCase();
    let keyUpper = key.padEnd(str.length, key).toUpperCase();
    let result = '';
    for (let i = 0, j = 0; i < strUpper.length; i++, j++) {
      let keyUpperWithSpaces = keyUpper.slice(0, i + 1);
      if (!letters.includes(strUpper[i])) {
        result = result + strUpper[i];
        
        continue;
      }
      result = result + letters[(letters.indexOf(strUpper[i]) + letters.indexOf(keyUpper[j])) % 26];
      if (j === keyUpper.length - 1) j = -1;
    }
    
    return result;
  }
  decrypt(str, key) {
    if (!str || !key || str === undefined) {
      throw new Error ('Incorrect arguments!');
    }
    
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

module.exports = {
  VigenereCipheringMachine
};
