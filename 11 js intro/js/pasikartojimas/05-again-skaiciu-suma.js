function skaiciuSuma (nuo, iki) {  
    let skaiciuSuma = 0;

    for (let i = nuo; i <= iki; i++) {
        skaiciuSuma+= i;
    }
    return skaiciuSuma;
}

function skaiciuSumosIlgis (skaiciuSuma) {
    return (skaiciuSuma + '').length;
}

function sumaIrSumosIlgis (nuo, iki) {
    if (typeof nuo !== 'number' || typeof iki !== 'number') {
        return 'Pateikta netinkama reikšmė';
    }

    const suma = skaiciuSuma(nuo, iki);
    const ilgis = skaiciuSumosIlgis(suma);

    return `Skaičių suma yra ${suma} ir skaičių sumos ilgis yra ${ilgis}.`;
}

console.log(sumaIrSumosIlgis(1, 10));
console.log(sumaIrSumosIlgis(0, 4));
console.log(sumaIrSumosIlgis(0, 0));
console.log(sumaIrSumosIlgis('kuku', 4));
console.log(sumaIrSumosIlgis(4, false));
console.log(sumaIrSumosIlgis(4, undefined));
console.log(sumaIrSumosIlgis(4, [true]));
console.log(sumaIrSumosIlgis([6, 8], 'kuku'));
console.log(sumaIrSumosIlgis(4, {}));
console.log(sumaIrSumosIlgis(4, ''));
console.log(sumaIrSumosIlgis(457, 5755, 77)); //šitas praeina, nors ir teisingas atsakymas gaunamas!