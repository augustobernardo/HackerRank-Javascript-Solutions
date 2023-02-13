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
 * Complete the 'stdDev' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function stdDev(arr) {
    let mean = 0;
    let stdDev = 0;

    // Find the mean
    for (let i = 0; i < arr.length; i++) {
        mean += arr[i];
    }
    mean /= arr.length;

    // Find the standard deviation
    for (let i = 0; i < arr.length; i++) {
        stdDev += (arr[i] - mean) ** 2;
    }
    stdDev /= arr.length;
    stdDev = Math.sqrt(stdDev);

    console.log(stdDev.toFixed(1));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const vals = readLine().replace(/\s+$/g, '').split(' ').map(valsTemp => parseInt(valsTemp, 10));

    stdDev(vals);
}
