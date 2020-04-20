import pairs from '@hexlet/pairs';
import startGame from '../../src/index.js';

const description = 'What is the result of the expression?';
const random = (num) => Math.floor(Math.random() * Math.floor(num));

const game = () => {
  const numberOne = random(50);
  const numberTwo = random(50);

  let correctAnswer;
  let operation;

  switch (random(3)) {
    case 0:
      operation = `${numberOne} + ${numberTwo}`;
      correctAnswer = numberOne + numberTwo;
      break;
    case 1:
      operation = `${numberOne} - ${numberTwo}`;
      correctAnswer = numberOne - numberTwo;
      break;
    case 2:
      operation = `${numberOne} * ${numberTwo}`;
      correctAnswer = numberOne * numberTwo;
      break;
    default:
  }

  return pairs.cons(operation, String(correctAnswer));
};

export default () => startGame(game, description);
