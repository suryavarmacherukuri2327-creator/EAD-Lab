// countDigits.js
// Program to count the number of digits in a given number

let number = 987654; // change this value
let count = 0;
let temp = number;

while (temp > 0) {
    temp = Math.floor(temp / 10);
    count++;
}

console.log(`Number of digits in ${number} is ${count}`);