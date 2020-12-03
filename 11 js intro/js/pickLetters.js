function pickLetters(text, step) {
    // input validation
    if (typeof text !== 'string') {
        return 'error: pirmas parametras turi būti tekstas.';
    }
    if (text === '') {
        return 'error: pirmas parametras negali būti tuščias tekstas.';
    }
    if (typeof step !== 'number') {
        return 'error: antrasis parametras turi buti skaiciaus tipo';
    }
    if (step > text.length) {
        return 'error: nurodytas žingsnis negali viršyti teksto ilgio';
    }
    if (step === 0) {
        return 'error: žingsnis negali būti 0 (nulis)';
    }

    // logic
    let word = '';

    for (let i = step - 1; i < text.length; i+= step) {
        const letter = text[i];
        // console.log(i, letter, step);
        word += letter;
    }

    // post logic validation
    if (word === '') {
        return 'error: nutiko kazkas labai keisto, nes ši klaida turėjo būti neįmanoma gauti';
    }

    // return result
    return word;
}

console.log(pickLetters('abcdefg', 2));
// rezultatas: “bdf”
console.log( pickLetters('abcdefghijkl', 3));
// rezultatas: “cfil”
console.log( pickLetters('abc', 0));
// rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( pickLetters('abc', 4));
// rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( pickLetters(1561, 2));
// rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”

// kas - 2 ar -3 raidė? raidės imamos iš kito galo tiesiog! iš dešinės į kairę 
