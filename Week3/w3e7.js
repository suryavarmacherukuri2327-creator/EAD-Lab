// fibonacci.js
// Program to display Fibonacci series up to n terms

let terms = 10; // change this value
let a = 0, b = 1;

console.log("Fibonacci Series:");
for (let i = 1; i <= terms; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}