const skaiciu = 7;                  // number
const teksta = 'labas';             // string
const tiesa = true;                 // boolean
const melas = false;                // boolean
const pazymiai = [5, 10];           // object (array)
const zodziai = ['Labas', 'rytas']; // object (array)

console.log(skaiciu, typeof skaiciu);
console.log(teksta, typeof teksta);
console.log(melas, typeof melas);
console.log(pazymiai, typeof pazymiai);
console.log(zodziai, typeof zodziai);

// visi išvardinti dlaykai yra objektai!

// array gali aprašyti žmogų
const arrayZmogus = ['Vardenis', 'Pavardenis', 99, 1999, false, true, 2, 3];
// false - turi šunį
// true - neturi katės
// 99 - kiek metų
// etc, nepatogu, prastas skaitomumas

const zmogus = {
    vardas: 'Kukutis',
    pavarde: 'Kukiauskas',
    amzius: 99,
    gimimoMetai: '1921',
    kojuSkaicius: 2,
    rankuSkaicius: 2,
    galvos: 1,
    turiKate: true,
    turiSuni: false,
    gyvenamosiosVietos: [
        {
            miestas: 'Alytus', 
            gatve: 'Nemuno'
        },
        {
            miestas: 'Ukmerge',
            gatve: 'Piliakalnio'
        },
    ],
    tevai: {
        motina: {
            vardas: 'Marija',
            amzius: 69
        }, 
        tevas: {
            vardas: 'Petras',
            amzius: 77
        }
    }
}

console.log(zmogus);
console.log(zmogus['vardas']);
console.log(zmogus['gimimoMetai']);
console.log(zmogus['turiKate']);

// taip užklausti patogiau
console.log(zmogus.pavarde);
console.log(zmogus.turiSuni);
console.log(zmogus.turiKate);

const auto = {
    marke: 'Tesla',
    modelis: '3',
    spalva: 'geltona',
    baterija: 100,
    sedyniu: 4 
}

console.log(auto.modelis);
console.log(`Mano ${auto.marke} yra ${auto.spalva} ir turi ${auto.sedyniu} sėdynes, o baterijos pasikrovimo lygis yra ${auto.baterija}.`);

// zmogui priskiriame auto
zmogus.automobilis = auto;
console.log(zmogus);

// iš žmogaus ištraukti auto markę
console.log(zmogus.automobilis.marke);

// išsitraukti vieną iš tėvų
// console.log(zmogus.tevai);
// console.log(zmogus.tevai[0]);
// console.log(zmogus.tevai[0].vardas);
// console.log(zmogus.tevai[1].lytis);

// again, perrašius tėvus
console.log(zmogus.tevai.motina.vardas);
console.log(zmogus.tevai.tevas.amzius);