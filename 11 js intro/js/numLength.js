function hasDot (text) {
    //griozd
    // for (let i = 0; i < text.length; i++) {
    //     const letter = text[i];
    //     if (letter === '.') {
    //         return true;
    //     }
    // }
    // mažiau grioz ir paprasčiau
    for (let letter of text) {
        if (letter === '.') {
            return true;
        }
    }

    return false;
}

function numLength (num) {
    if (typeof num !== 'number') {
        return 'error, duotas ne skaicius.';
    } 
    if (isNaN(num)) {
        return 'error, skaicius turi buti tikras, ne NaN';
    }
    if (!isFinite(num)) {
        return 'error, skaicius turi buti tikras, ne Infinity';
    }
    let length = 0;
    const textNumber = '' + num;
    length = textNumber.length;

    // randame ar skaicius desimtainis

    //pirmas variantas toks
    // if (hasDot(textNumber)) {
    //     length--;
    // }

    //kitas variantas daug geresnis  ir priimtinesnis, efektyvesnis
    if (num % 1 !== 0) {
        length--;
    }
    //randame minuso zekla / neigiama skaiciu
    if (num < 0) {
        length--;
    }

    return length;
}

//OK ATS
console.log(numLength(5), '->', 1);
console.log(numLength(781), '->', 13);
console.log(numLength(37060123456 ), '->', 11);
console.log(numLength(2 + 2 * 2));
console.log(numLength(3.1456));
console.log(numLength(-3.1456));
console.log(numLength(-969));
console.log(numLength(565656565656555555555555555555555555555555555969, '-> )max gaunasi)', 22));

//NE ATS
console.log(numLength(true));
console.log(numLength('asd'));
console.log(numLength(NaN));
console.log(numLength([1, 3, 6]));
console.log(numLength(Infinity));
console.log(numLength(-Infinity));
console.log(numLength(numLength));
console.log(numLength(undefined));
console.log(numLength([]));
console.log(numLength(5656565656565555555555555555555555555555555559699, '->', '23'));