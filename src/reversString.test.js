import { reverseString } from './reversString.js'

describe('test for checkNumber function', () => {
    it('should return revers string', () => {
       expect(reverseString('Hello')).toBe('olleH'); //pass
       expect(reverseString('12345')).toBe('54321'); //pass
    });
})