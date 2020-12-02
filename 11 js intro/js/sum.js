/*
Suskaiciuoti skaiciu suma intervale (imtinai).
*/

// [1..4] = 10
// [2..5] = 14
// [1..10] = 55

//su minusiniais skaičiais -70+(-69) -> -70-69 -> -139, tai taip minusėja
// const nuo = -70;
// const iki = 30;
// let suma = 0;

// for (let i = nuo; i <= iki; i++) {
//     suma += i;
//     console.log(i, '=>', suma);
// }

// console.log('FINAL:', suma);

// pliusiniai skaičiai
const nuo = 8;
const iki = 88;
let suma = 0;

for (let i = nuo; i <= iki; i++) {
    suma += i;
    console.log(i, '=>', suma);
}

console.log('FINAL:', suma);

