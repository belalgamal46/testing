const stringLength = require('./stringLength');

it('length of between 1 and 10', () => expect(stringLength('belal')).toBe(5));
it('length equal to one', () => expect(stringLength('b')).toBe(1));
it('length equal to ten', () => expect(stringLength('belalgamal')).toBe(10));
