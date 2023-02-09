'use strict';

const fs = require('fs');

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
 * Complete the 'quickSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function quickSort(arr) {
    let left = [];
    let equal = arr[0];
    let right = [];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < equal) {
            left.push(arr[i]);
        } else if (arr[i] > equal) {
            right.push(arr[i]);
        } else {
            equal.push(arr[i]);
        }
    }
    return left.concat(equal, right);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = quickSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
