// nenaudojant for gautųsi taip
// const txt = 'abcdef';
// const firstLetter = txt[0];

// console.log(firstLetter);
// console.log(txt[1]);
// console.log(txt[2]);
// console.log(txt[3]);
// console.log(txt[4]);

/*
Isvesti duota zodi is kito galo.
*/

const text = 'Labas!';
let backwardText = ''; // kitanamsis saugoti atvirkščio teksto reikšmei. 
// kiti pvz 'a' + '' -> 'a' 
// 'a' + 'b' -> 'ab'
// '' + '' -> ''
// ' ' + '' = ' '

// Imame raides is galo ciklo metu
for (let i = text.length - 1; i >= 0; i--) {
//     const letter = text[i];
//     backwardText += letter;

//     console.log(i, letter, backwardText);
// }

// console.log(text, '<-->', backwardText);


// // Ciklas eina is priekio, bet raides paimame is galo
for (let i = 0; i < text.length; i++) {
    const letter = text[text.length - 1 - i];
    /* čia raidė yra = 
    text.length - 1 -> paverčia į nuliukų sistemą taigi text.length yra 6, tai dar reikia -1, tai dabar turime nuliukų sistemoje 5
    o tada dar - i, iš pradžių - 0, ir taip gauname paskutinę text raidę, kas yra '!'
    po to - i -> - 1, ir gauname priešpaskutinę raide!
    */
    backwardText += letter;
    /*
    kaip čia veikia?
    backwardText = backwardText + letter;
    backwardText = '' + '!' -> '!'
    backwardText = '!' + 's' -> '!s'
    backwardText = '!s' + 'a' -> '!sa'
    ...etc
    */

    console.log(i, letter, backwardText)
}

console.log(backwardText);


// Ciklas eina is priekio, raides imame is priekio, bet statome jas irgi is priekio
// for (let i = 0; i < text.length; i++) {
//     const letter = text[i];
//     backwardText = letter + backwardText;
//     /*
//     backwardText = 'L' + '' -> 'L'
//     backwardText = 'a' + 'L' -> 'aL'
//     backwardText = 'b' + 'aL' -> 'baL'
//     */
// }

// console.log(backwardText);

// da best būdas
console.log('Labas'.split('').reverse().join(''));
