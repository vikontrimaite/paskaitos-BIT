//greitesnis už foreach

const pazymiai = [10, 8, 6, 2, 2];

let sum = 0;

for (let paz of pazymiai) {
    console.log(paz);
    sum += paz;
}

console.log(sum);

/*
loops'ai pagal efektyvumą
for (pats greičiausias!)
while
do-while
for-of
for-in
foreach
*/
