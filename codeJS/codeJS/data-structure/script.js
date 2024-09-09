// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [3, 4, 5];
const newarr = [1, 2, ...arr];
console.log(newarr);

const newMenu = [...restaurant.mainMenu, 'Saag'];
console.log(newMenu);

const newrestuarent = { foundedIn: '1946', ...restaurant, founder: 'ahmad' };
console.log(newrestuarent);

const [Pizza, Risotto, ...other] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(other);

console.log(10 && undefined);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = game.players[0];
const players2 = game.players[1];

console.log(players1);
const [gk, ...fieldPlayers] = players1;

console.log(gk);
console.log(fieldPlayers);
const allPlayer = [...players1, ...players2];
console.log(allPlayer);
const playerFinal = [...players1, 'Thiago', 'Coutinho', 'Persic'];
console.log(playerFinal);

const { team1, x: draw, team2 } = game.odds;

console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(...players);
  console.log(players.length);
};

printGoals(...game.scored);

team1 < team2 && console.log('team1');
team2 < team1 && console.log('Team2 is more likely to win');

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const [i, el] of menu.entries()) {
  console.log(i, el);
}

const days = ['mon', 'tue', 'wed', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';

  console.log(`On ${day} we are ${open}`);
}

const users = [{ name: 'ahmad', email: 'ahmed@gmail.com' }];
console.log(users[0]?.name ?? 'User array Empty');

// for (const [index, player] of game.scored.entries()) {
//   console.log(`Goal ${index + 1} scored by ${player}`);
// }

for (const odd in game.odds) {
  // console.log(odd);
  if (game[odd] != undefined) console.log(game[odd]);
}

const Scorers = {};

for (const [index, player] of game.scored.entries()) {
  Scorers[player] == undefined ? (Scorers[player] = 1) : (Scorers[player] += 1);
}
console.log(Scorers);

const orderedSet = new Set(['Pasta', 'Pizza', 'Risotto']);

console.log(new Set('jonas'));

console.log(orderedSet.size);

const rest = new Map();
rest.set('name', 'Ahmad').set(1, 'hello').set(2, 'bye');
console.log(rest);

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['Correct', 3],
  [true, 'Correct'],
]);

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const unique = [new Set(...gameEvents.values())];
console.log(unique);

gameEvents.delete(64);
const Time = [...gameEvents.keys()].pop();
console.log(Time);
console.log(`An event ocuured on average ${Time / gameEvents.size}`);

for (const [minute, event] of gameEvents) {
  const half = minute < 45 ? 'First' : 'Second';
  console.log(`${half} ${minute} ${event}`);
}

const airline = 'PIA airline';
console.log(airline.indexOf('P'));
console.log(airline.slice(0, 2));
console.log(airline.slice(0, airline.indexOf(' ')));

const str = 'AhMEd';
const strlower = str.toLowerCase();
const strfinal = strlower[0].toUpperCase() + strlower.slice(1);
console.log(strfinal);

const Email = ' Heloo@gmial.com \n';
const normalized_email = Email.toLowerCase().trim();
console.log(normalized_email);

const fin_normalized_email = normalized_email.replace('gmial', 'gmail');

console.log('This is a test'.split(' '));
const newstr = ['Mr', str].join(' ');
console.log(newstr);

console.log(str.padStart(25, '+'));

console.log(str.repeat(3));

document.body.append(document.createElement('textarea'));

document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i,row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${$output.padEnd(20,' ')}${'*'.repeat(i+1)}`);
  }
});
