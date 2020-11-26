/* JavaScript mini užduotys */

/* Kintamųjų inicijavimas

Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console */

const num1 = 1;
console.log(num1);
const num2 = 6;
console.log(num2);
const num3 = 65;
console.log(num3);

const name = 'Varlius';
console.log(name);
const city = 'Kaunas';
console.log(city);
const tea = 'green tea';
console.log(tea);

const age = [1, 6, 7, 9, 22];
console.log(age);
const marks = [9, 10, 8, 10, 5];
console.log(marks);
const grams = [200, 798, 387, 112, 676];
console.log(grams);

const plants = ['monstera', 'banana', 'clivia', 'peperomia', 'crassula'];
console.log(plants);
const furniture = ['bed', 'sofa', 'chair', 'armchair', 'desk'];
console.log(furniture);
const animal = ['cat', 'bird', 'giraffe', 'whale', 'dog'];
console.log(animal);


/* Veiksmai su kintamaisiais

Susumuoti visus skaičiaus tipo kintamuosius
    Rezultatą išvesti į console
Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
    Rezultatą išvesti į console
Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
    1-2+3-4+5
    Rezultatą išvesti į console
Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas */

console.log(num1 + num2 + num3);

console.log(`${num1} ${num2} ${num3}`);

console.log(1 - 6 + 7 - 9 + 22);
console.log(9 - 10 + 8 - 10 + 5);
console.log(200 - 798 + 387 - 112 + 676);

console.log(`${monstera}, ${banana}, ${clivia}, ${peperomia}, ${crassula}`);
console.log(`${bed}, ${sofa}, ${chair}, ${armchair}, ${desk}`);
console.log(`${cat}, ${bird}, ${giraffe}, ${whale}, ${dog}`);

/* Kintamųjų palyginimas
Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

Tarpusavyje palyginti skaičiaus tipo kintamuosius:
    kuris didesnis
    kuris mažesnis
    ar jie lygūs
    ar jie nelygūs
    kuris didesnis arba lygus
    kuris mažesnis arba lygus
Išvesti teksto tipo kintamųjų ilgius
Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
    kuris didesnis
    kuris mažesnis
    ar jie lygūs
    ar jie nelygūs
    kuris didesnis arba lygus
    kuris mažesnis arba lygus
Išvesti sąrašo tipo kintamųjų ilgius
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
    kuris didesnis
    kuris mažesnis
    ar jie lygūs
    ar jie nelygūs
    kuris didesnis arba lygus
    kuris mažesnis arba lygus */

/*    Ciklo for panaudojimas
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
    0 - 0
    0 - 4
    0 - 100
    574 - 815
    -50 - 50
    -70 - 30
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
    pvz.: “abcdef” -> “fedcba”
Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
    0 - 11
    8 - 31
    -18 - 18
    rezultatą pateikti tokiu formatu:
        Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
        Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
        Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai. */
