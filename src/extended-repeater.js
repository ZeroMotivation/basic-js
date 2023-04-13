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
  str = String(str);
  const addition = String(options.addition) !== 'undefined' ? String(options.addition) : "";
  let words = [];
  for(let i = 0; i < (options.additionRepeatTimes || 1); i++)
    words.push(addition);

  const add = words.join(options.additionSeparator || '|');
  words = [];

  for(let i = 0; i < (options.repeatTimes || 1); i++)
    words.push(str + add);

  return words.join(options.separator || '+');
}
module.exports = {
  repeater
};
