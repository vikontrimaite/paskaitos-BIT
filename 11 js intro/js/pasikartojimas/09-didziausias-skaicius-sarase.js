function findBiggestNum (numberArray) {
    if (typeof numberArray !== 'object' || typeof numberArray === 'string') {
        return 'Pateikta netinkamo tipo riekšmė.';
    }
    // išfiltruoja array'jų: patikrina ar array'juje esantis elemntas nėra skaičius ar NaN, ir kad likusio array'jaus ilgis nėra nulis
    if (numberArray.filter((element) => typeof element !== 'number' || isNaN(element)).length !== 0) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if (numberArray.length === 0) {
        return 'Pateiktas sąrašas negali būti tuščias.'
    }

    let biggestNumber = 0;
    for (let i = 0; i <= numberArray.length; i++) {
            
            // if (numberArray[i] < 0 || numberArray[i] <= biggestNumber) {
            //     biggestNumber = numberArray[i];
            // }
            if (numberArray[i] >= biggestNumber) {
                biggestNumber = numberArray[i];
            } 
        }
        return biggestNumber;
    }

console.log(findBiggestNum([5, 0]));
console.log(findBiggestNum([-5, 78, 14, 0, 18]));
console.log(findBiggestNum([69, 69, 69, 69, 66]));
console.log(findBiggestNum([5, 2, 7, 1, -8, 999, 9, 1]));

console.log(findBiggestNum('labas'));
console.log(findBiggestNum([]));
console.log(findBiggestNum(undefined));
console.log(findBiggestNum(true));
console.log(findBiggestNum(['labas']));
console.log(findBiggestNum([NaN, 7, 8, NaN, 1]));
console.log(findBiggestNum([6, 7, 1, 'labas', 78, 4]));

// kaip su minusais? paašytas if'as visada returnina tiesiog paskutinį skaičių
console.log(findBiggestNum([-1, -2, -3, -4, -5, -6, -7, -8]));
