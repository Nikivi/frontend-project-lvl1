import pairs from '@hexlet/pairs';
import startGame from '../../src/index.js';

const description = 'What number is missing in the progression?';
const random = (num) => Math.floor(Math.random() * Math.floor(num));

const game = () => {
  const progression = (startNumber, count) => {
    const arr = [];
    let numPush = startNumber;
    for (let i = 0; i < 10; i += 1) {
      arr.push(numPush);
      numPush += count;
    }
    return arr;
  };

  const startNumber = random(50);
  const count = random(10);
  const numDel = random(10);
  const array = progression(startNumber, count);

  const correctAnswer = array[numDel];
  const question = () => {
    array[numDel] = '..';
    return array.join(' ');
  };

  return pairs.cons(question(), String(correctAnswer));
};

export default () => startGame(game, description);
