const StringManager = require('./StringManager');

const stringManager = new StringManager();

describe('', () => {
  test('check if capitalized', () => {
    const string = 'belal';

    const result = stringManager.capitalize(string);

    expect(result).toBe('Belal');
  });
});
