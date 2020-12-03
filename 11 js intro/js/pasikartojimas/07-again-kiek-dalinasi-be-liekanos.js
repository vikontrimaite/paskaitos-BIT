function countNumerWithoutRemainder (skaiciusNuo, skaiciusIki, daliklis) {
    
    let countSkaiciuKiekis = 0;

    for (let i = skaiciusNuo; i <= skaiciusIki; i++) {
        if (i % daliklis === 0) {
        countSkaiciuKiekis++;
        }
    }
    return countSkaiciuKiekis;
}

function printResult (skaiciusNuo, skaiciusIki, daliklis) {

    let resultMessage = ''; // apsibrėžus čia kintamąjį, ji lengviau vėliau modifikuoti esant reikalui

    if (typeof skaiciusNuo !== 'number' || typeof skaiciusIki !== 'number' || typeof daliklis !== 'number') {
        resultMessage = 'Pateikta netinkamo tipo reikšmė.';
    } else { // else rašomas, kad neriekėtų rašyti return. return reiškia, kad išeinama iš funkcijos ir nebespausdins again tai, ko nereikia
        const countSkaiciuKiekis = countNumerWithoutRemainder (skaiciusNuo, skaiciusIki, daliklis);
        resultMessage = `Skaičių intervale tarp ${skaiciusNuo} ir ${skaiciusIki}, besidalijančių be liekanos iš ${daliklis} yra ${countSkaiciuKiekis} vienetai.`;
        /* kviečiant taip funkciją:
        šioje funkcijoje neapibrėžtas kintamasis su const (nes nebesikeicia reikšmė) = funkcijos, iš kurios kvieti, pavadinimas (argumentai esamos funkcijos);
        */
    }
    console.log(resultMessage);
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

printResult(1, undefined, 'labas');
printResult(1, NaN, 'labas');
printResult(9, [], 4);
