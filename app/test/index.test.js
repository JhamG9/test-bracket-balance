const validateBracketBalance = require('../index');

test('value is balancing', () => {
    expect(validateBracketBalance('{}[]()')).toBe(true);
});

test('value not is balancing', () => {
    expect(validateBracketBalance('({}[]()}')).toBe(false);
});
