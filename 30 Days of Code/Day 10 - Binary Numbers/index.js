'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the main function below.


function main() {
    const n = parseInt(readLine().trim(), 10);

    let binary = n.toString(2);
    let count = 0;
    let max = 0;
    
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            count++;
        } else {
            count = 0;
        }
        if (count > max) {
            max = count;
        }
    }
    console.log(max);
}
