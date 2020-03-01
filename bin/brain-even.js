import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? \n');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const even = (num) => num % 2 === 0;

const randomRound = 100;

for (let i = 0; i < 3; i += 1) {
  const random = Math.floor(Math.random() * Math.floor(randomRound));
  const answer = readlineSync.question(`${random} \n`);
  if (even(random) && answer === 'yes') {
    console.log('Correct!');
  } else if (even(random) && answer === 'no') {
    console.log(`"no" is wrong answer ;(. Correct answer was "yes". \nLet's try again, ${name}!`);
    break;
  }

  if (!even(random) && answer === 'no') {
    console.log('Correct!');
  } else if (!even(random) && answer === 'yes') {
    console.log(`"yes" is wrong answer ;(. Correct answer was "no". \nLet's try again, ${name}!`);
    break;
  }
  if (i === 2) { console.log(`Congratulations, ${name}!`); }
}
