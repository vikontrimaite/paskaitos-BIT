// % <- šitas vadinasi modulo
// mod - operacija, kuri pasako liekaną (po modulo% panaudojimo), pvz, 5 % 2 = 1
// remainder - liekana, pvz tas 1 iį vienos eilutės auksčiau

// const nuo = 0;
// const iki = 11;
// let dividable = 0;
// let daliklis = 3;

// // dividable - iš kiek dalinasi skaičių aka kurie pasidalija, pvz iš 3 be liekanos

// for (let i = nuo; i <= iki; i++) {
//     if (i % daliklis === 0) {
//         dividable++;
//     } 
// }

// console.log(dividable);

// funkcijos formatas to pačio
// viena funkcija atlieka po vieną darbą - single responsability principle
function skaiciutiKiekSkaiciuDalinasiBeLiekanos (skaiciusNuo, skaiciusIki, daliklis) { 
    let kiekSkaiciuDalinasiBeLiekanos = 0; 
    for (let i = skaiciusNuo; i <= skaiciusIki; i++) {
        if (i % daliklis === 0) {
            kiekSkaiciuDalinasiBeLiekanos++;
        } 
    }
    return kiekSkaiciuDalinasiBeLiekanos;
}

function formatResult (skaiciusNuo, skaiciusIki, daliklis, kiekSkaiciuDalinasiBeLiekanos) {
    return `Skaičių intervale tarp ${skaiciusNuo} ir ${skaiciusIki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekSkaiciuDalinasiBeLiekanos} vienetai.`;
}

function printResult (skaiciusNuo, skaiciusIki, daliklis) {
    const countWithoutRemainder = skaiciutiKiekSkaiciuDalinasiBeLiekanos(skaiciusNuo, skaiciusIki, daliklis); //suskaičiuoja kiek skaičių dalinasi be liekanos + čia apsibrėžiamas kaip naujas kintamasis dėl geresnio redability
    console.log(formatResult(skaiciusNuo, skaiciusIki, daliklis, countWithoutRemainder));
}

printResult(0, 11, 3);
printResult(0, 11, 5);
printResult(0, 11, 7);

printResult(8, 31, 3);
printResult(8, 31, 5);
printResult(8, 31, 7);

printResult(-18, 18, 3);
printResult(-18, 18, 5);
printResult(-18, 18, 7);