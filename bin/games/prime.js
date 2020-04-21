import pairs from '@hexlet/pairs';
import startGame from '../../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const random = (num) => Math.floor(Math.random() * Math.floor(num));

const game = () => {
  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  const num = random(500);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return pairs.cons(num, String(correctAnswer));
};

export default () => startGame(game, description);
