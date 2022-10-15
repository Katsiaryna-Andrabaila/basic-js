const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let times = options['repeatTimes'];
  let sep = options['separator'];
  let add = options['addition'];
  let addTimes = options['additionRepeatTimes'];
  let addSep = options['additionSeparator'];
  if (options.hasOwnProperty('repeatTimes') && times === 1 && !options.hasOwnProperty('separator') && !options.hasOwnProperty('addition')) {
    return str;
  } else if (options.hasOwnProperty('repeatTimes') && times > 1 && !options.hasOwnProperty('separator') && !options.hasOwnProperty('addition')) {
    for (let i = 0; i < times - 1; i++) {
      result = result + str + '+';
    }
    return result + str;
  } else if (options.hasOwnProperty('repeatTimes') && options.hasOwnProperty('separator') && !options.hasOwnProperty('addition')) {
    for (let i = 0; i < times - 1; i++) {
      result = result + str + sep;
    }
    return result + str;
  } else if (options.hasOwnProperty('repeatTimes') && options.hasOwnProperty('separator') && options.hasOwnProperty('addition') && addTimes === 1) {
    for (let i = 0; i < times - 1; i++) {
      result = result + str + add + sep;
    }
    return result + str + add;
  } else if (!options.hasOwnProperty('repeatTimes') && options.hasOwnProperty('separator') && options.hasOwnProperty('addition')) {
    return str + add;
  } else if (options.hasOwnProperty('repeatTimes') && options.hasOwnProperty('separator') && options.hasOwnProperty('addition') && addTimes > 1 && options.hasOwnProperty('additionSeparator')) {
    let resultAdd = '';
    for (let k = 0; k < addTimes - 1; k++) {
      resultAdd = resultAdd + add + addSep;
    }
    for (let i = 0; i < times - 1; i++) {
      result = result + str + resultAdd + add + sep;
    }
    return result + str + resultAdd + add;
  } else if (options.hasOwnProperty('repeatTimes') && !options.hasOwnProperty('separator') && options.hasOwnProperty('addition') && addTimes > 1 && !options.hasOwnProperty('additionSeparator')) {
    let resultAdd = '';
    for (let k = 0; k < addTimes - 1; k++) {
      resultAdd = resultAdd + add + '|';
    }
    for (let i = 0; i < times - 1; i++) {
      result = result + str + resultAdd + add + '+';
    }
    return result + str + resultAdd + add;
  } else if (options.hasOwnProperty('repeatTimes') && options.hasOwnProperty('separator') && options.hasOwnProperty('addition') && addTimes > 1 && !options.hasOwnProperty('additionSeparator')) {
    let resultAdd = '';
    for (let k = 0; k < addTimes - 1; k++) {
      resultAdd = resultAdd + add + '|';
    }
    for (let i = 0; i < times - 1; i++) {
      result = result + str + resultAdd + add + sep;
    }
    return result + str + resultAdd + add;
  } else if (options.hasOwnProperty('repeatTimes') && !options.hasOwnProperty('separator') && options.hasOwnProperty('addition') && addTimes > 1 && options.hasOwnProperty('additionSeparator')) {
    let resultAdd = '';
    for (let k = 0; k < addTimes - 1; k++) {
      resultAdd = resultAdd + add + addSep;
    }
    for (let i = 0; i < times - 1; i++) {
      result = result + str + resultAdd + add + '+';
    }
    return result + str + resultAdd + add;
  } else if (typeof str === 'object') {
    return 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT';
  }
}

module.exports = {
  repeater
};
