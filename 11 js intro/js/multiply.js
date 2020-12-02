function multiply(pirmas, antras) {
    console.log('Gauta reiksme:', pirmas);
    console.log('Gauta reiksme:', antras);

    //čia -1 tik įdomumo dėlei
    const sandaugosRezultatas = pirmas * antras - 1;
    console.log('Sandauga:', sandaugosRezultatas);

    return sandaugosRezultatas;
}

const skaicius1 = 4;
const skaicius2 = 8;
const skaicius3 = -5;

const rez = multiply(skaicius1, skaicius2);
console.log('Grazintas rezultatas:', rez); // 32


// console.log(multiply(skaicius3, skaicius2)); // -40
// console.log(multiply(skaicius1, skaicius3)); // -20
// console.log(multiply(99, -11));

// mano paprastas sprendimas
function daugyba (a, b) {
    const sandauga = a * b;
    return sandauga;
};

console.log(daugyba(2, 3));
console.log(daugyba(7, 4));
console.log(daugyba(5, 5));