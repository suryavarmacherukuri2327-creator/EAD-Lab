// reverseNumber.js
// Program to reverse a given number

let num = 12345; // change this value
let reversed = 0;

while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
}

console.log(`Reversed number is ${reversed}`);