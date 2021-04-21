const insertShiftArray = require('code-challenges/arrayShift/arrayShift.js');


describe('Testing Challenge Shift Array', () => {
            test('It should return the array with 5 in the middle', () => {
                expect(insertShiftArray([2, 4, 6, 8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
            });
            test('It should return the array with the 16 in numerical order', () => {
                expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toStrictEqual([4, 8, 15, 16, 23, 42]);
            });
            test('It should return an array with only a 5', () => {
                expect(insertShiftArray([], 5)).toStrictEqual(5);
            });