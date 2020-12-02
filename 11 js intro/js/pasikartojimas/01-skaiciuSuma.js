// const nuo = -50;
// const iki = 50;
// let skaiciuSuma = 0;

// for (let i = nuo; i <= iki; i++) {
//     skaiciuSuma += i;
// }
// console.log(skaiciuSuma);

function skaiciuSusumavimas(skaiciusNuo, skaiciusIki) {
    let skaiciuSuma = 0;
    for (let i = skaiciusNuo; i <= skaiciusIki; i++) {
        skaiciuSuma += i;
    }
    return skaiciuSuma;
}
console.log(skaiciuSusumavimas(0, 0));
console.log(skaiciuSusumavimas(0, 4));
console.log(skaiciuSusumavimas(574, 815));
console.log(skaiciuSusumavimas(-50, 50));
console.log(skaiciuSusumavimas(-70, 30));