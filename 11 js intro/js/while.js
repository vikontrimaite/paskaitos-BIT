/*
while() {}
procedūros atliekamos 'tol-kol' tenkinama kažkokia sąlyga/sąlygos
*/

// let i = 0;

// while(i < 5) {
//     console.log('labas');
// }
//čia auksčiau begalinis ciklas, nes i nesikeičia 

//čia jau baigtinis
let i = 0;

while(i < 5) {
    console.log('labas');
    i++;
}

//realiai tas pats kaip for
for(let m = 0; m < 5; m++) {
    console.log('labas rytas');
}

// kitas
const pazymiai = [5, 10, 8, 7];
let sum = 0;
let pazymiaiIndex = 0;
const pazymiuKiekis = pazymiai.length;

while(pazymiaiIndex < pazymiuKiekis) {
    sum += pazymiuKiekis[pazymiaiIndex];
    pazymiaiIndex++;
}
console.log(sum); //čia auksčiau kažkur yra klaida, surasti!!

// for užrašytas to pačio auksčiau
let sumFor = 0;
for (let i = 0; i < pazymiai.length; i++) {
    sumFor += pazymiai[i];
}

console.log(sumFor);

//dar kitas
console.log(Math.random());

// sumuoti atsitiktinį skaičių, tol kols gausim sumą 10
let randomSum = 0;
let randCount = 0;

while (randomSum < 10) {
    randCount++;
    randomSum += Math.random();
    console.log(randCount, '------', randomSum);
}
//taigi while gali būti naudinga, kai mažiau apibrėžtumo yra, kaip kad čia

//bet galima tą patį padaryti su for
let randomSumFor = 0;
let randCountFor = 0;

for (; randomSumFor < 10; randomSumFor += Math.random()) {
    randCountFor++;
}

console.log(randCountFor, '----', randomSumFor);