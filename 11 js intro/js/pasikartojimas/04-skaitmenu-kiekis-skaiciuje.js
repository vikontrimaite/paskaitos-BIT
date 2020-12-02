// function skaitmenuKiekisSkaiciuje (kintamasis) {
//     if (Number.isInteger(kintamasis) === false) {
//         console.log('Pateikta netinkamo tipo reikšmė.');
//     } else {
//         let countSudaranciuSkaitmenuKiekis =  0;
//         kintamasis = kintamasis + ''; //taip kintamąjį paverčia stringu. kitu atveju ant skaičiaus negali panaudoti length metodo!
//         for (let i = 0; i <= kintamasis.length - 1; i++) {
//             countSudaranciuSkaitmenuKiekis++;
//         }
//         return countSudaranciuSkaitmenuKiekis;
//     }
    
// }
// console.log(skaitmenuKiekisSkaiciuje(5555));

// paprasčiau 
function skaitmenuKiekisSkaiciuje (kintamasis) {
    if (!(Number.isInteger(kintamasis))) {
        console.log('Pateikta netinkamo tipo reikšmė.');
    } else {
        kintamasis = kintamasis + '';
        return kintamasis.length;
    }
    
}

console.log(skaitmenuKiekisSkaiciuje(13));