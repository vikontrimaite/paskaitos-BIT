const marks = [9, 10, 8, 10];
const animal = ['cat', 'bird', 'giraffe', 'whale', 'dog'];

/* pažymiai:
    vidurkis
    išrikiuoti (min, max)
    surasti, ar turi konkretų skaičių
    surasti min, max reikšmes
*/

// vidurkis
const vidurkis = (9 + 10 + 8 + 10) / 4;
console.log(vidurkis);

// arba
const sarasoSkaiciuSuma = 9 + 10 + 8 + 10;
const skaiciuKiekis  = 4;
const vidurkisAgain = sarasoSkaiciuSuma / skaiciuKiekis;
console.log(vidurkisAgain);

// the best
const sarasoSkaiciuSumaAgain = marks[0] + marks[1] + marks[2] + marks[3];
const skaiciuKiekisAgain  = marks.length;
const vidurkisAgainAgain = sarasoSkaiciuSumaAgain / skaiciuKiekisAgain;
console.log(vidurkisAgainAgain);