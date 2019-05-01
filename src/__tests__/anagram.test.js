const isAnagram = require('../anagram');

test('check if isAnagram is a function', () => {
    expect(typeof isAnagram).toBe('function')
})

test('"elbow" is an anagram of "below"', () => {
    expect(isAnagram('elbow', 'below')).toBeTruthy()
})

test('"Dormitory" is an anagram of "dirty room"', () => {
    expect(isAnagram('Dormitory', 'dirty room')).toBeTruthy()
})

test('"hello" is an anagram of "aloha"', () => {
    expect(isAnagram('hello', 'aloha')).toBeFalsy()
})