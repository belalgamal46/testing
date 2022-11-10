class StringManager {
  stringLength = (string) => {
    if (string.length >= 1 && string.length <= 10) {
      const length = string.length;
      return length;
    }

    throw new Error('Invalid string');
  };

  reverseString = (string) => {
    if (typeof string !== 'string') {
      throw new Error('Invalid type');
    }
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
