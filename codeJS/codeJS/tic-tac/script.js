'use-strict';

let gameRunning = 1;
let player = 1;
let count = 0;
const turn = document.querySelector('.turn');
let board = [null, null, null, null, null, null, null, null, null];
const alertPlayer = function (player) {
  console.log('in');
  turn.textContent = `Player ${player} Won`;
  turn.classList.add('won');

  gameRunning = 0;
};

const checkWinner = function () {
  console.log(board);
  for (let i = 0, k = 0; i < 7; i += 3, k += 1) {
    if (board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
      if (board[i]) {
        alertPlayer(board[i]);
      }
    }
    if (board[k] === board[k + 3] && board[k + 3] === board[k + 6]) {
      if (board[k]) {
        alertPlayer(board[k]);
      }
    }
  }
  if (board[0] === board[4] && board[4] === board[8]) {
    console.log('Player Won');
    if (board[0]) {
      alertPlayer(board[0]);
    }
  }
};

const div = [];
for (let i = 1; i < 10; i += 1) {
  div[i] = document.querySelector(`.box${i}`);
  div[i].addEventListener('click', function () {
    if (gameRunning && board[i - 1] === null) {
      if (player == 1) {
        div[i].textContent = 'O';
      } else {
        div[i].textContent = 'X';
      }

      board[i - 1] = player;
      if (player == 1) {
        turn.textContent = `Turn -> Player 2 (X)`;
        player = 2;
      } else {
        player = 1;
        turn.textContent = `Turn -> Player 1 (O)`;
      }
    }

    checkWinner();
  });
}
