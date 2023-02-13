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
 * Complete the 'interQuartile' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY values
 *  2. INTEGER_ARRAY freqs
 */

function median(arr) {
    let n = arr.length;
    if (n % 2 == 0) {
        return (arr[n / 2 - 1] + arr[n / 2]) / 2;
    } else {
        return arr[Math.floor(n / 2)];
    }
}

function quartile(arr, q) {
    let n = arr.length;

    if (n % 2 == 0) {
        if (q == 1) {
            return median(arr.slice(0, n / 2));
        } else {
            return median(arr.slice(n / 2));
        }
    } else {
        if (q == 1) {
            return median(arr.slice(0, Math.floor(n / 2)));
        } else {
            return median(arr.slice(Math.ceil(n / 2)));
        }
    }
}

function interQuartile(values, freqs) {
    let arr = [];
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < freqs[i]; j++) {
            arr.push(values[i]);
        }
    }
    arr.sort((a, b) => a - b);

    let q1 = quartile(arr, 1);
    let q3 = quartile(arr, 3);
    console.log((q3 - q1).toFixed(1));
}

function getMedian(arr) {
    arr.sort((a, b) => a - b);
    let median = arr.length / 2;

    if (arr.length % 2 != 0) {
        return arr[Math.floor(median)];
    }
    return (arr[median] + arr[median - 1]) / 2;
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const val = readLine().replace(/\s+$/g, '').split(' ').map(valTemp => parseInt(valTemp, 10));

    const freq = readLine().replace(/\s+$/g, '').split(' ').map(freqTemp => parseInt(freqTemp, 10));

    interQuartile(val, freq);
}
