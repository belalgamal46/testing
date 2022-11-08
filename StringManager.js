class StringManager {
  stringLength = (string) => {
    if (string.length >= 1 && string.length <= 10) {
      const length = string.length;
      return length;
    }
    if (string.length > 10) {
      const length = string.length;
      return length;
    }
    throw new Error('Invalid string');
  };

  reverseString = (string) => {
    return string.split('').reverse().join('');
  };
}

module.exports = StringManager;
