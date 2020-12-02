/*
foreach -> eina per kiekvieną
*/

const skaiciai = [1, 2, 3, 4, 5, 6];

console.log(skaiciai);
//mane domina čia esančų skaičių kvadratas

for (i=0; i<skaiciai.length; i++) {
    const skaicius = skaiciai[i];
    console.log(skaicius * skaicius);
}

//galima geriau panaudoti foreach, kas yra jau metodas .forEach()
// jo vidurje turi būti funkcija

function kvadratu(x) {
    const rez = x * x;
    console.log(rez);
    return rez;
}

skaiciai.forEach(kvadratu);
// čia funkcija be skliaustelių, nes taip nurodoma, kur yra funkcija kurią reikia panaudoti

// kitas variantas bevardėje funkcijoje, galima apjungti viską į vieną vietą. funkcijos nereikia pavadinti,nes ji tik vieną kartą panaudojama 
// čia foreach + function
skaiciai.forEach(function(p) {
    const kvd = p *p;
    console.log(kvd);
    return kvd;
});

//trečias būdas užrašyti foreach panaudojant arrow funciotns
// čia foreach + arrow
skaiciai.forEach (p => console.log(p*p));

//foreach - nefektyviausias ciklas pasak dėstytojo 
// naudojamas ant nedidelių sąrašų 10-kelių šimtų