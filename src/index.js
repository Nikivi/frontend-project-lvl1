import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';

const getName = () => readlineSync.question('May I have your name? \n');
const name = getName();

const startGame = (game, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 1; i <= 3; i += 1) {
    const initGame = game();
    const question = pairs.car(initGame);
    const correctAnswer = pairs.cdr(initGame);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default startGame;
