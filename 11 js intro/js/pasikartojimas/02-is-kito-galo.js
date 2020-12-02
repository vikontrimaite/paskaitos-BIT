const zodis = 'Kukutis!';
let backwardText = '';

//iš prieko einantis ciklas per visas raides ir jas išspausdina
// for (let i = 0; i <= zodis.length - 1; i++) {
//     let raide = zodis[i];
//     console.log(raide, i);
//     backwardText += raide; 
// }

// console.log(backwardText);

// iš galo einantis ciklas, spausdina visas raides nuo galo
for (let i = zodis.length - 1; i >= 0; i--) {
    let raide = zodis[i];
    console.log(raide, i);
    backwardText += raide; 
}

console.log(backwardText);