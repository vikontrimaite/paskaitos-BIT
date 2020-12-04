function skaitmenuKiekisFunkcijoje (number) {
    if (typeof number !== 'number' || number === -Infinity || number === Infinity || isNaN(number)) {
        return 'Pateikta netinkamo tipo reikšmė.'
    }
    
    return `${number}`.length;
}

console.log(skaitmenuKiekisFunkcijoje(5));
console.log(skaitmenuKiekisFunkcijoje(577));
console.log(skaitmenuKiekisFunkcijoje(6454535375));
console.log(skaitmenuKiekisFunkcijoje(51234));

console.log(skaitmenuKiekisFunkcijoje('labas'));
console.log(skaitmenuKiekisFunkcijoje([3, 3]));
console.log(skaitmenuKiekisFunkcijoje(-Infinity));
console.log(skaitmenuKiekisFunkcijoje(Infinity));
console.log(skaitmenuKiekisFunkcijoje(undefined));
console.log(skaitmenuKiekisFunkcijoje(false));
console.log(skaitmenuKiekisFunkcijoje(NaN));