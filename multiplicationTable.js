const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for a number
rl.question('Enter a number to generate its multiplication table: ', (number) => {
    const num = parseInt(number);

    if (isNaN(num)) {
        console.log('Please enter a valid number.');
    } else {
        console.log(`\nMultiplication Table for ${num}:\n`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
    }

    // Close the input stream
    rl.close();
});