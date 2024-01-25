'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
  };

  const getFigureComputer = lang => {
    const arr = [...lang];
    const num = getRandomIntInclusive(0, 2);
    const figure = arr[num];
    console.log('computer:', figure);
    return figure;
  };

  const getFigurePlayer = lang => {
    const arr = lang;
    const userR = arr === FIGURES_ENG ?
    prompt('rock, scissors, paper?', '') :
    prompt('камень, ножницы, бумага?', '');
    const user = typeof userR === 'string' ? userR.toLowerCase() : '';
    if (arr.includes(user) || user === '') {
      console.log('user:', user);
      return user;
    } else {
      return getFigurePlayer(lang);
    }
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' ||
    language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;
    return function start() {
      const array = [...lang];
      const computer = getFigureComputer(lang);
      const player = getFigurePlayer(lang);
      let arr = [];
      const ANSWERS_RUS = ['Вы действительно хотите выйти из игры?',
        `Результат игры, количество очков:` +
        `\nВы: ${result.player}.\nКомпьютер: ${result.computer}.`,
        `Ничья!\nКомпьютер: ${computer}.\nВы: ${player}.`,
        `Компьютер победил!\nКомпьютер: ${computer}.\nВы: ${player}.`,
        `Вы победили!\nКомпьютер: ${computer}.\nВы: ${player}.`];
      const ANSWERS_ENG = ['Do you really want to quit the game?',
        `The result of the game, the number of points:` +
        `\nYou: ${result.player}.\nComputer: ${result.computer}.`,
        `It's a draw!\nComputer: ${computer}.\nYou: ${player}.`,
        `The computer has won!\nComputer: ${computer}.\nYou: ${player}.`,
        `You have won!\nComputer: ${computer}.\nYou: ${player}.`];
      const answer = language === 'EN' ||
      language === 'ENG' ? arr = ANSWERS_ENG :
      arr = ANSWERS_RUS;
      if (player === '' && confirm(arr[0]) === true) {
        alert(arr[1]);
        return;
      }
      if (computer === player) {
        alert(arr[2]);
      }
      if (computer === array[0] && player === array[1] ||
          computer === array[1] && player === array[2] ||
          computer === array[2] && player === array[0]) {
        alert(arr[3]);
        result.computer++;
      }
      if (computer === array[1] && player === array[0] ||
         computer === array[2] && player === array[1] ||
         computer === array[0] && player === array[2]) {
        alert(arr[4]);
        result.player++;
      }
      start();
    };
  };
  window.RPS = game('EN');
})();
