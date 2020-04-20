import pairs from '@hexlet/pairs';
import startGame from '../../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';
const random = (num) => Math.floor(Math.random() * Math.floor(num));

const game = () => {
  const numberOne = random(50);
  const numberTwo = random(50);

  const count = (number1, number2) => {
    if (number2 > number1) return count(number2, number1);
    if (!number2) return number1;
    return count(number2, number1 % number2);
  };

  const numbers = `${numberOne} ${numberTwo}`;
  const correctAnswer = count(numberOne, numberTwo);

  return pairs.cons(numbers, String(correctAnswer));
};

export default () => startGame(game, description);
