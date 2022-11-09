const StringManager = require('./StringManager');

test('check if function return a length', () => {
  // Arrange
  const stringManager = new StringManager();
  const string = 'belal gamal';

  // Act
  const result = stringManager.stringLength(string);

  // Assert
  expect(result).toBe(11);
});

test('check if length between 1 and 10', () => {
  // Arrange
  const stringManager = new StringManager();
  const string = 'belal';

  // Act
  const result = stringManager.stringLength(string);

  // Assert
  expect(result).toBe(5);
});

test('check if length equal to 1', () => {
  // Arrange
  const stringManager = new StringManager();
  const string = 'b';

  // Act
  const result = stringManager.stringLength(string);

  // Assert
  expect(result).toBe(1);
});

test('check if length equal to 10', () => {
  // Arrange
  const stringManager = new StringManager();
  const string = 'belalgamal';

  // Act
  const result = stringManager.stringLength(string);

  // Assert
  expect(result).toBe(10);
});
