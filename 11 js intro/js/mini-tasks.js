// https://docs.google.com/document/d/1UnM5MzO7KPf-atlz3HXPJN8XlaN37nlUJ7fp6GwvIZ8/edit
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
    Rezultatą išvesti į console */

console.log(num1 + num2 + num3);

/* Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
    Rezultatą išvesti į console */

console.log(`${num1} ${num2} ${num3}`);

/* Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
    1-2+3-4+5
    Rezultatą išvesti į console */

console.log(`Value of all ages are: ${age[0] - age[1] + age[2] - age[3] + age[4]}`);
console.log(`Value of all marks are: ${marks[0] - marks[1] + marks[2] - marks[3] + marks[4]}`);
console.log(`Value of all grams are: ${grams[0] - grams[1] + grams[2] - grams[3] + grams[4]}`);


/* Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas */

console.log(`List of plants with space and comma: ${plants[0]}, ${plants[1]}, ${plants[2]}, ${plants[3]}, ${plants[4]}.`);
console.log(`List of furniture with space and comma: ${furniture[0]}, ${furniture[1]}, ${furniture[2]}, ${furniture[3]}, ${furniture[4]}.`);
console.log(`List of furniture with space and comma: ${animal[0]}, ${animal[1]}, ${animal[2]}, ${animal[3]}, ${animal[4]}.`);

/* Kintamųjų palyginimas
Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

Tarpusavyje palyginti skaičiaus tipo kintamuosius:
    kuris didesnis
    kuris mažesnis
    ar jie lygūs
    ar jie nelygūs
    kuris didesnis arba lygus
    kuris mažesnis arba lygus */

    if (num1 > num2) {
        console.log('Pomidoras');
    } else {
        console.log('Bandykite kitą kartą');
    }

    if (num2 < num3) {
        console.log('Pomidoras');
    } else {
        console.log('Bandykite kitą kartą');
    }

    if (num3 === num1) {
        console.log('Pomidoras');
    } else {
        console.log('Bandykite kitą kartą.');
    }

    if (num1 !== num2) {
        console.log('Pomidoras');
    } else {
        console.log('Bandykite kitą kartą.');
    }

    if (num3 >= num1) {
        console.log('Pomidoras');
    } else {
        console.log('Bandykite kitą kartą.');
    }

    if (num1 <= num2) {
        console.log('Pomidoras');
    } else {
        console.log('Bandykite kitą kartą.');
    }

/* Išvesti teksto tipo kintamųjų ilgius */

console.log(`The length of variable ${name} are ${name.length} symbols.`);
console.log(`The length of variable ${city} are ${city.length} symbols.`);
console.log(`The length of variable ${tea} are ${tea.length} symbols.`);

/* Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
    kuris didesnis
    kuris mažesnis
    ar jie lygūs
    ar jie nelygūs
    kuris didesnis arba lygus
    kuris mažesnis arba lygus */

    if (name.length > city.length) {
        console.log(`Variable ${name} is longer than variable ${city}`);
    } else {
        console.log(`Variable ${name} is not longer than variable ${city}`);
    }

    if (city.length < tea.length) {
        console.log(`Variable ${city} is not longer than variable ${tea}`);
    } else {
        console.log(`Variable ${city} is longer than variable ${tea}`);;
    }

    if (tea.length === name.length) {
        console.log(`Variable's ${tea} length is equal to the length of variable ${name}`);
    } else {
        console.log(`Variable's ${tea} length is not equal to the length of variable ${name}`);
    }

    if (name.length !== city.length) {
        console.log(`Variable's ${name} length is not equal to the length of variable ${city}`);
    } else {
        console.log(`Variable's ${name} length is equal to the length of variable ${city}`);
    }

    if (tea.length >= name.length) {
        console.log(`Variable's ${tea} length is bigger or equal to the length of variable ${name}`);
    } else {
        console.log(`Variable's ${tea} length is not bigger or not equal to the length of variable ${name}`);
    }

    if (name.length <= city.length) {
        console.log(`Variable's ${name} length is not bigger or not equal to the length of variable ${city}`);
    } else {
        console.log(`Variable's ${name} length is bigger or equal to the length of variable ${city}`);
    }

/* Išvesti sąrašo tipo kintamųjų ilgius */


/* Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
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

