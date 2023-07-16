/*Напишите программу, которая проверяет несколько чисел 
и выводит сообщение "Число {N} четное!" или "Число {N} нечетное!"*/

export function checkNumber(number) {
  if (number < 1 || number > 1000) {
      return "Данные неправильные";
  } else if (number % 2 === 0) {
      return `Число ${number} четное!`;
  } else {
      return `Число ${number} нечетное!`;
  }
}