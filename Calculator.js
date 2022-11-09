class Calculator {
  add = (x, y) => {
    return x + y;
  };

  subtract = (x, y) => {
    if (y > x) {
      return Math.abs(x - y);
    }
    return x - y;
  };

  divide(x, y) {
    if (x === 0 && y === 0) {
      throw new Error('Invalid');
    }
    return x / y;
  }

  multiply = (x, y) => {
    return x * y;
  };
}

module.exports = Calculator;
