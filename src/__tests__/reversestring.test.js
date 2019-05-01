const reverseString = require('../reversestring');

test('reverseString is defined', () => {
    expect(reverseString).toBeDefined()
})

test('Reverse string to olleh', () => {
    expect(reverseString('Hello')).toBe('olleh')
})