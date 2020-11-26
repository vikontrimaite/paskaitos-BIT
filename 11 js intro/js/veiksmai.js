// matematinės operacijos

const num1 = 5;
const num2 = 8;

const suma = num1+num2;
console.log(suma);
console.log(num1*num2);
console.log(num1, '/', num2, '=');

const zodis1 = 'labas';
const zodis2 = 'rytas';
const zodis3 = 'Lietuva';
console.log(`${zodis1} ${zodis2}, ${zodis3}!`);

// tekstu iniciavimo/rašymo subtilybės

// both are  good:
const txt1 = "Lorem";
const txt2 = 'Lorem'; 

// const txt3 = 'sakinys su kabute' -> "sakinys su 'kabute";
// ir atvirkščiai

// ir vienguba, ir dviguba kabutės?
const txt5 = 'labukas \' kabutes arba \" kabutes';
console.log(txt5);

// kita diena
// old style solution
const pilnasHTML = '<div>\
<h1>JS rocks!</h1>\
<p>Lorem labas</p>\
<div>';
console.log(pilnasHTML);

// kinda cooler, but still bad
const backtickHTML = `<div>
<h1>JS rocks!</h1>
<p>Lorem labas</p>
<div>'`;
console.log(backtickHTML);

// the best solution
const emoji = '🦙🦔';
const jsText = 'JS rocks';
const htmlText = 'Lorem labas';

  const backtickrealHTML = `<div> 
    <h1>${jsText} ${emoji}</h1>
    <p>${htmlText}</p>
</div>`;
console.log(backtickrealHTML);