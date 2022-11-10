const StringManager = require('./StringManager');
const stringManager = new StringManager();

test('should return string reversed', () => {
  // Arrange
  const string = 'belal';

  // Act
  const result = stringManager.reverseString(string);

  // Assert
  expect(result).toBe('laleb');
});

test('should throw if value is not string', () => {
  // Arrange
  const string = 1;

  // Act
  const result = () => stringManager.reverseString(string);

  // Assert
  expect(result).toThrow('Invalid type');
});
