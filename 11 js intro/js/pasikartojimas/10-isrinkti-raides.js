function validateVariables (text, step) {
    if (typeof text !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    }
    if (text.length === 0) {
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    }
    if (text.length <= step) {
        return 'Teksto ilgis negali būti mažesnis už step\'o ilgį.';
    }
    if (typeof step !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }
    if (step <= 0) {
        return 'Antrasis kintamasis turi būti didesnis už nulį.';
    }
    return '';
}

function pickLetter (text, step) {
   const isVariablesValid = validateVariables(text, step);
//    console.log(isVariablesValid);
    if (isVariablesValid.length !== 0) {
        return isVariablesValid;
   } 
   let pickedLetters = '';
        for (let i = step - 1; i <= text.length - 1; i+=step) {
            let letter = text[i];
            // console.log(letter, text, step, text.length);
            pickedLetters += text[i];
}
    return pickedLetters;
}

// console.log(pickLetter('zebras', 2));
// console.log(pickLetter('katinas', 2));
// console.log(pickLetter('katinas', 3));
// console.log(pickLetter('kepasol', 2));
// console.log(pickLetter('abcdefg', 2));
// console.log(pickLetter('abcdefghijkl', 3));

debugger;
console.log(pickLetter(55, 4));
// console.log(pickLetter('', 6));
// console.log(pickLetter('abc', 4));
// console.log(pickLetter('abc', 'lala'));
// console.log(pickLetter('abc', 0));