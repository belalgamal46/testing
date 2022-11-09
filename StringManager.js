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
    const error = new Error('Invalid string');
    throw error;
  };

  reverseString = (string) => {
    return string.split('').reverse().join('');
  };

  capitalize = (string) => {
    if (typeof string === 'number') {
      throw new Error('please enter a string not a number');
    }
    const capitalizeFirstLetter = string.charAt(0).toUpperCase();
    const newString = capitalizeFirstLetter + string.slice(1);
    return newString;
  };
}

module.exports = StringManager;
