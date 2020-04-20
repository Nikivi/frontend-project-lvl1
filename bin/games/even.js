import pairs from '@hexlet/pairs';
import startGame from '../../src/index.js';

const even = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const random = (num) => Math.floor(Math.random() * Math.floor(num));

const game = () => {
  const number = random(100);
  const correctAnswer = even(number) ? 'yes' : 'no';
  return pairs.cons(number, correctAnswer);
};

export default () => startGame(game, description);
