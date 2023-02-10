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

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    var len = arr.length;
    var negatives = [];
    var positives = [];
    var zeros = [];

    arr.forEach((value) => {
        if (value < 0) {
            negatives.push(value);
        } else if (value > 0 ) {
            positives.push(value);
        } else {
            zeros.push(value);
        }
    });
    
    var positivesProp = (positives.length / len).toFixed(6);
    var negativesProp = (negatives.length / len).toFixed(6);
    var zerosProp = (zeros.length / len).toFixed(6);
    var proportions = [positivesProp, negativesProp, zerosProp];

    proportions.forEach((value) => console.log(value));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
