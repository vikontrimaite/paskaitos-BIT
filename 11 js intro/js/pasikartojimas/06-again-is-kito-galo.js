function printTextBackward (text) {
    if (typeof text !== 'string') {
        return 'Pateikta netinkama reikšmė.';
    }
    let backward = '';

    for (let i = text.length - 1; i >= 0; i--) {
        let letter = text[i];
        backward += letter;
    }

    return backward;
}

console.log(printTextBackward('backward'));
console.log(printTextBackward('miegoti'));
console.log(printTextBackward('66565'));

console.log(printTextBackward(66565));
console.log(printTextBackward([66565]));
console.log(printTextBackward(undefined));
console.log(printTextBackward(NaN));
console.log(printTextBackward(Infinity));
console.log(printTextBackward(['labas', 'iki']));