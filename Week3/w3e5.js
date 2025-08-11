// factorial.js
// Program to find the factorial of a number

let n = 5; // change this value
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log(`Factorial of ${n} is ${fact}`);