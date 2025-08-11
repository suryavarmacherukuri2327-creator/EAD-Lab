// reverseString.js
// Program to reverse a string using loop

let str = "Surya"; // change this value
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

console.log(`Reversed string: ${reversedStr}`);