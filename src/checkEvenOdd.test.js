import { checkNumber } from './checkEvenOdd.js'

describe('test for checkNumber function', () => {
    it('should check for an even or odd number', () => {
       expect(checkNumber(7)).toBe('Число 7 нечетное!');
    });

    it('should check for an even or odd number', () => {
       expect(checkNumber(7)).toBe('Число 7 четное!');
    });

    it('should check for an even or odd number', () => {
       expect(checkNumber(1001)).toBe('Данные неправильные');
    });
 })

 describe('test for checkNumber function', () => {
   it('should check for an even or odd number', () => {
      expect(checkNumber(9)).toBe('Число 9 нечетное!'); //pass
      expect(checkNumber(8)).toBe('Число 8 четное!'); //pass
      expect(checkNumber(1001)).toBe('Данные неправильные'); //pass
   });
})