/*
do-while
procedūros įgyvendinimas bent vieną kartą, jei sąlyga leidžia - kartojama

do {

} while (condition);

visada sąlygą įvykdo bent vieną kartą!
klausti ir daryti sukeista vietomis!
*/

let i = 0;
do { 
    console.log('labas');
    i++;
} while (i < -5); 
// jeigu i < 5 -išspausdina 5 kartus 'labas'
// jeigu i < -5 - išsspaudina tik vieną kartą 'labas'

//kitas pvz
do {
    console.log('knoc knoc');
} while (Math.random() < 0.9);

