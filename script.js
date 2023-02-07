'use strict';
// --------選擇器----------
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// --------初始化----------
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

// --------搖骰子功能------

let activePlayer = 0; //當前玩家

let currentScore = 0; //當前分數

let scores = [0, 0]; //紀錄兩名玩家總分的array

btnRoll.addEventListener('click', () => {
  // 1.產生一個1~6的隨機數字
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  // 2.改變骰子的圖
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNumber}.png`;

  // 3.檢查結果
  if (diceNumber !== 1) {
    // 3-1.如果不是1，將數字加到當前分數內
    currentScore += diceNumber;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // 3-2.如果是1，將當前分數清空並切換玩家
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // 切換玩家的視覺效果
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});
