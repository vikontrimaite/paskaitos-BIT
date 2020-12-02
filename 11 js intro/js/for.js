let pinigine = 0;
const pajamos = [100, 200, 300, 100, 100, 0, 100];
let menuo = 0;

pinigine += pajamos[menuo++];
console.log(pinigine);
// taigi ilgas užrašymas būtų 
// pinigine = pinigine + pajamos(kiekvieno mėnesio(čia mėnuo - kas kart vienu didenis nei kad buvo))

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);


// susipažinimas su ciklu for - pasikartojančių operacijų sąrašas

for (let i = 0; i <= 5; i++) {
    console.log('Siuo metu i yra', i);
}

/*
i=0;  0 >= -5 -> log
i=-1;  -1 >= -5 -> log
i=-2;  -2 >= -5 -> log
i=-3;  -3 >= -5 -> log
i=-4;  -4 >= -5 -> log
i=-5;  -5 >= -5 -> log
i=-6;  -6 >= -5 BREAK
*/


/*
Suskaiciuoti pazymiu vidurki.
1) susumuoti pazymius
2) suma padalinti is pazymiu kiekio 
*/

const marks = [10, 2, 8, 4, 6, 1, 7, 9];

let sum = 0;
const count = marks.length;

for (let i = 0; i < count; i++) {
    const mark = marks[i];
    sum += mark;
    // vienas mark yra i-tasis marks'as <-- išgauna mark'ą iš array'jaus
    // esama sum = esama sum + paimtasis i-tasis mark;

    // console.log(i + ')', mark, '->', sum); //nemeniškas užrašymas
    console.log(`${i}) kai pazymys yra ${mark}, tada esanti suma yra ${sum}`); //meniškas užrašymas
}
console.log(`visų pazymiu suma yra ${sum}`);

const average = sum / count;

console.log(`Pazymiu vidurkis yra ${average}.`);


// kitas pvz
// const txt = 'abcdef';
// const firstLetter = txt[0];

// console.log(firstLetter);
// console.log(txt[1]);
// console.log(txt[2]);
// console.log(txt[3]);
// console.log(txt[4]);