function add(num1, num2){
    num2 = num2 || 0 ; // jodi value  deya hoy parameter er modde tahole  num2 er value ta nibe or value na deya hoy tahole 0 nibe
    return num1 + num2;
}
const total = add(15);
console.log(total);

function add(num3, num4 = 20){ // num2 = 20 default value
    return num3 + num4;
}
const total = add(15 , 1); // jodi parameter ee value deya hoy tahole default value ignore koree parameter er value add korbeee
console.log(total);

