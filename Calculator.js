class Calculator {
  static add = (x, y) => {
    return x + y;
  };

  static subtract = (x, y) => {
    if (y > x) {
      return Math.abs(x - y);
    }
    return x - y;
  };

  static divide = (x, y) => {
    return x / y;
  };

  static multiply = (x, y) => {
    return x * y;
  };
}

module.exports = Calculator;
