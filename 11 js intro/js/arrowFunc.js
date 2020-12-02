//įprastinė funkcijos deklaracija
function sum(a, b) {
    return a + b;
}
console.log(sum(8, 9));


//kintamajam galima priskirti funkcijos logiką
//kintamajam priskirta aoniminė funkcija
const atimtis = function(a, b) {
    return a - b;
}

console.log(atimtis(184, 5));

//dar vienas būdas užrašyti funcijos funcionalumą
// arrow funcion - rodyklinė funkcija
const dalyba = (a, b) => {
    return a / b;
}
console.log(dalyba(81, 3));

//arrow function - jei logika sudaryti tik iš vienos procedūros aka veiksmo tarp riestinių {}, tiksliau riestinių sklaisutų net nereikia
const daugyba = (a, b) => a * b;

console.log(daugyba(2, 2));

//arrow function - jei yra tik vienas gaunamas parametras - tada  galima nerašyti dar ir skliaustelių aplink jį ()
const kvadratu = a => a * a;
console.log(kvadratu(10));

//taigi
/*
zero parmas
const funcName = () => {};

one param
const funcName = paramOne => {};

two or more params
const funcName = (paramOne, paramTwo) => {};
*/