const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const buff = [];
  let s = "";
  for(let i = 0; i < str.length; i++) {
    s += str[i];
    if((str[i] !== str[i + 1])) {
      buff.push(s);
      s = "";
    }
  }
  return buff.reduce((s, curr) => {
    s += curr.length === 1 ? curr[0] : curr.length + curr[0];
    return s;
  }, "");
}

module.exports = {
  encodeLine
};
