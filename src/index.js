module.exports = function reverse(number) {
    const reversedString = String(number).split('').reverse().join('');
    const reversedAbsolute = parseInt(reversedString);
    const absoluteValue = Math.abs(reversedAbsolute);
    return absoluteValue;
  }

