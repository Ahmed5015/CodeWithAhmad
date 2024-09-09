'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higer Order Function

const transformer = function (str, fn) {
  console.log(`Transformed String ${fn(str)}`);
};

transformer('I am the best', upperFirstWord);
//upperFirstWord is callback function

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in {the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answer = prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    );
    answer == Number(answer);
    answer >= 0 && answer <= 3
      ? (poll.answers[answer] = 1)
      : console.log('Invalid option');
    this.displayResults();
  },
  displayResults(type = '') {
    console.log(`${type} ${this.answers.join(', ')}`);
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
