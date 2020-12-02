const star = '*';
let starsString = '';

// for (let i = 0; i < 6; i++) {
//     starsString += star;
//     /*
//     starsString = '' + '*' -> '*'
//     starsString = '*' + '*' -> '**'
//     starsString = '**' + '*' -> '***'
//     etc
//     */
//     console.log(starsString);
// }


//iš kitos pusės
let starArray = [];
let starsStringBreak = '\n'

for (let i = 6; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
        starArray.push(star);
        // starArray << star;
        // čia << reiškia push! 
    }
    console.log(starArray.join('') + starsStringBreak);
    starArray = [];
}




