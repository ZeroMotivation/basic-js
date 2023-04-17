const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
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
  constructor(direction = true) {
    this._alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.direction = direction;
  }
  _stringTransform(message) {
    return message.split('').map(el => {
      if(this._alphabet.includes(el))
        return el = this._alphabet.indexOf(el.toUpperCase());
      return el;
    });
  }

  _encryptWord(word, key) {
    let w = this._stringTransform(word);
    let k = key.padEnd(w.length, key);
    k = this._stringTransform(k);
    let res = w.map((el, i) => el = (el + k[i]) % 26);
    return this.direction ? res.map(el => el = this._alphabet[el]).join('') : res.reverse().map(el => el = this._alphabet[el]).join('');
  }

  _decryptWord(word, key) {
    let w = this._stringTransform(word);
    let k = key.padEnd(w.length, key);
    k = this._stringTransform(k);
    let res = w.map((el, i) => {
      if((el - k[i]) < 0) {
        return el = ((el - k[i]) + 26) % 26;
      }
      return el = (el - k[i]) % 26;
    });
    return this.direction ? res.map(el => el = this._alphabet[el]).join('') : res.reverse().map(el => el = this._alphabet[el]).join('') ;
  }

  encrypt(message, key) {
    if(!message || !key) throw new Error('Incorrect arguments!');
    return this.direction ? message.split(' ').map(el => el = this._encryptWord(el, key)).join(' ') : message.split(' ').reverse().map(el => el = this._encryptWord(el, key)).join(' ');
  }

  decrypt(message, key) {
    if(!message || !key) throw new Error('Incorrect arguments!');
    return this.direction ? message.split(' ').map(el => el = this._decryptWord(el, key)).join(' ') : message.split(' ').reverse().map(el => el = this._decryptWord(el, key)).join(' ');
  }
}

module.exports = {
  VigenereCipheringMachine
};
