// mano užrašai
/* kintamųjų tipas (atminties atžvilgiu):
primityvi reikšmė
kompleksinė reikšmė
*/

// primityvios reikšmės
// let a = 5;

// kompleksinės reikšmės
// let listB = [4, 7, 6];

//iš githubo RB

/***************
 * PRIMITYVIOS REIKSMES
 ****************/

let a = 5;
let b = 100;

console.log(a);
console.log(b);

b = a;

console.log(a);
console.log(b);

a = 88;

console.log(a);
console.log(b);

// a: 88, b: 5
//bet prie kompleksinių reikšmių, aka array dalykai veikia kitaip!

console.log('------------');

/***************
 * KOMPLEKSINES REIKSMES
 ****************/

let listA = [11, 22];
let listB = [800, 900];

console.log(listA);
console.log(listB);

listB = listA;

console.log(listA);
console.log(listB);

listA[0] = 2;
//net jeigu būtų const listA, būtų galima daryti listA[0] ir pnš; taigi kitaip nei primityvios reikšmės!
// nes taip veikia kompiuterio atmintis

console.log(listA);
console.log(listB);

// !!!ats: ir listA ir listB dabar yra [2, 22]!!!

listA = [7, 77, 777];
// <- čia total atmintis perašoma, todėl nepaveikia listB

console.log(listA);
console.log(listB);