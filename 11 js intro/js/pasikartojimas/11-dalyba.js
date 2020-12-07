function validateVariables (number1, number2) {
    if (typeof number1 !== 'number' || isNaN(number1)) {
        return 'First variable must be a number.';
    }
    if (typeof number2 !== 'number' || isNaN(number2)) {
        return 'Second variable must be a number.';
    }
    return '';
}

function division (number1, number2) {
    const isVariablesValid = validateVariables (number1, number2);
    if (isVariablesValid.length !== 0) {
        return isVariablesValid;
        // jeigu lygu 0, tai reiškia, kad validateVariables grąžino tuščią stringą, kurio length yra 0.
    }
    return number1 / number2;
}

console.log(division(6, 2));
console.log(division(11, 7));
console.log(division(11, 72));

console.log(division(NaN, 7));
console.log(division(11, 'labas'));
console.log(division(11, '788'));
console.log(division([], 2));
console.log(division([], undefined));
console.log(division(division()));
console.log(division(true, false));
console.log(division(67, false));