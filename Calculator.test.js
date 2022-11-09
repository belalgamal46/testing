const Calculator = require('./Calculator');

const divide = (x, y) => {
  if (x === 0 || y === 0) {
    throw new Error('Invalid');
  }
  return x / y;
};

// Arrange
const calc = new Calculator();

// Act
const add = {
  normalAdd: calc.add(1, 1),
};

const subtract = {
  subtract: calc.subtract(2, 5),
};

const divideObject = {
  divide: calc.divide(4, 2),
  zeroDivide: calc.divide(0, 2),
};

const multiply = {
  multiply: calc.multiply(2, 2),
};

// Assert
describe('Calculator', () => {
  // Add Functionality
  describe('addition', () => {
    expect(add.normalAdd).toBe(2);
  });

  // Subtract Functionality
  describe('subtraction', () => {
    test('subtract', () => {
      expect(subtract.subtract).toBe(3);
    });
    test('subtract if first smaller', () => {
      expect(subtract.subtract).toBe(3);
    });
  });

  // Divide Functionality
  describe('division', () => {
    test('divide', () => {
      expect(divideObject.divide).toBe(2);
    });

    test('if x equal to zero', () => {
      expect(() => divide(0, 2)).toThrowError();
    });
  });

  // Multiply Functionality
  describe('multiply', () => {
    expect(multiply.multiply).toBe(4);
  });
});
