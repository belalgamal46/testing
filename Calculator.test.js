const Calculator = require('./Calculator');

// Arrange
const calc = new Calculator();

// Act
const add = {
  normalAdd: calc.add(1, 1),
};

const subtract = {
  subtract: calc.subtract(2, 5),
};

const divide = {
  divide: calc.divide(4, 2),
};

const multiply = {
  multiply: calc.multiply(2, 2),
};

// Assert
describe('Calculator', () => {
  // Add Functionality
  describe('addition', () => {
    test('add functionality', () => expect(add.normalAdd).toBe(2));
  });

  // Subtract Functionality
  describe('subtraction', () => {
    test('subtract functionality', () => expect(subtract.subtract).toBe(3));
    test('if y > x', () => expect(subtract.subtract).toBe(3));
  });

  // Divide Functionality
  describe('division', () => {
    test('divide functionality', () => expect(divide.divide).toBe(2));
  });

  // Multiply Functionality
  describe('multiply', () => {
    test('multiply functionality', () => expect(multiply.multiply).toBe(4));
  });
});
