const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let n = 1;
    let buff = 1;
    arr.forEach(el => {
      if(Array.isArray(el)) {
        buff += this.calculateDepth(el);
        n = buff > n ? buff : n;
        buff = 1;
      }
    })
    return n;
  }
}

module.exports = {
  DepthCalculator
};
