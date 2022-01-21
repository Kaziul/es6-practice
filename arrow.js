// function doubleIt(num){ // function declaration 
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

// const doubleIt = function myFun(num){// function expression jei function ta variable er moto koreee declar kora hoy 
//   return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

const doubleIt = num => num *2;  // arrow function es6 1 ta parameter 
const add = (x, y) => x + y; // 2 ta parameter
const give5 = () => 5; // kono parameter nai
const doMath = (x , y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = add(40, 30);
const result1 = give5();
const result2 = doMath(7, 5);
console.log(result1);
console.log(result);
console.log(result2);
