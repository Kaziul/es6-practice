const ages = [12, 23, 13, 21, 15];
const ages1 = [16, 22, 14, 17];
const ages2 = [22, 25, 26, 35, 27];
const allAges = ages.concat(ages1).concat([5]).concat(ages2);
const allAges1 = [...ages, ...ages1, 5, ...ages2]; // spread operator
console.log(allAges);
console.log(allAges1);

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);
const takaPoisa = [650, 450, 250, 850];
const maximum1 = Math.max(...takaPoisa);
console.log(maximum1);