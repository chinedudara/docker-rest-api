const functions = require('../functions');

// beforeEach(() => initDb());
// afterEach(() => closeDb());

beforeAll(() => initDb());
afterAll(() => closeDb());

const initDb = () => console.log('Database initialised');
const closeDb = () => console.log('Database closed');

test('Add 2 + 2 equals 4', () => {
    expect(functions.add(2,2)).toBe(4)
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})

describe('Name Tests', () => {
    test('name is equal to "Chinedu Dara"', () => {
        expect(functions.sayName()).toBe('Chinedu Dara')
    })
})

test('Fetch User Ervin Howell', () => {
    expect.assertions(1);
    return functions.fetchName().then(data => {
        expect(data.name).toEqual('Ervin Howell')
    })
})