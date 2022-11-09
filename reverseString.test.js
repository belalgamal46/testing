const StringManager = require('./StringManager');

test('check if function return a length', () => {
  // Arrange
  const stringManager = new StringManager();
  const string = 'belal';

  // Act
  const result = stringManager.reverseString(string);

  // Assert
  expect(result).toBe('laleb');
});
