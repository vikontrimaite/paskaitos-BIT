function bigNum(numList) {
    // input validation
    if (!Array.isArray(numList)) {
        return 'error: reikia patikti array tipo reiksmę'; // su šituo prigauna object {}
    }
    // if (typeof numList !== 'object') {
    //     return 'error: reikia pateikti array tipo verte su skaiciais';
        // šitas praleidžia ir ne array'jus
    // }
    if (numList.length === 0) {
        return 'error: skaiciu saras turi buti ne tuscias';
    }

    // logic
    // let maxNumber = numList[0];
    let maxNumber = -Infinity;
    for (let num of numList) {
        if (typeof num === 'number' && isFinite(num) && num > maxNumber) {
            maxNumber = num;
        }
        // post logic validation
        if (maxNumber === -Infinity) {
            return 'error: sarase nera tikru skaiciu';
        }
    }

    return maxNumber;
}

// console.log(bigNum([1]));
// // rezultatas: 1
// console.log(bigNum([1 ,2, 3]));
// // rezultatas: 3
// console.log(bigNum([-5, 78, 14, 0, 18]));
// // rezultatas: 78
// console.log(bigNum([69, 69, 69, 69, 66]));
// // rezultatas: 69
// console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]));
// // rezultatas: -1
console.log(bigNum([69, 69, 'labas', 69, 69, 66]));
// console.log(bigNum([69, 69, Infinity, 69, 69, 66]));
// console.log(bigNum(-Infinity));

// console.log(bigNum('pomidoras'));
// // rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log(bigNum([]));
// // rezultatas: “Pateiktas sąrašas negali būti tuščias.”
// console.log(bigNum(true));
// console.log(bigNum(false));
// console.log(bigNum(Infinity));
// console.log(bigNum(bigNum));
// console.log(bigNum(['labas', 'rytas', 'tra', 'lia', 'lia']));
// console.log(bigNum(NaN));
// console.log(bigNum(null));
// console.log(bigNum({}));
