/*
kintamieji

inicijavimo būdai:
const (default) - nekintanti 
let - leidžia overridinti reikšmę
var - nenaudoti

kintamųjų tipai:
Number
String
Boolean
array

kintamųjų tipas (atminties atžvilgiu):
primityvi reikšmė
kompleksinė reikšmė
*/

const vardas = 'Vardenis';
const metai = 2020;
const arTiesa = true;
const arNaktis = false;
const pazymiai = [10, 2, 7, 8];
const zodynas = ['labas', 'rytas', 'Lietuva'];

// bad example
// const pinigine = 0;
// pinigine = 100;

// good example
// let pinigine = 0;
// pinigine = 100;
// console.log(pinigine);


// extra?
let pinigine = 0;
console.log(pinigine);

pinigine = 100;
pinigine = 200;
pinigine = 370;
console.log(pinigine);
console.log(pinigine);
console.log(pinigine);

pinigine = 240;
console.log(pinigine);


let gyvenamojiVieta = 'Kestuciu g. 1';
console.log(gyvenamojiVieta);

gyvenamojiVieta = 'Vytauto g. 2';
console.log(gyvenamojiVieta);