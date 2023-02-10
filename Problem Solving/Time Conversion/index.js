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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let amPm = s.charAt(8);
    let timeConverted = "";

    if (amPm == "A") {
        if (s.substring(0, 2) == "12") {
            timeConverted = "00";

        } else {
            timeConverted = s.substring(0, 2);
        }
    } else {
        if (s.substring(0, 2) == "12") {
            timeConverted = s.substring(0, 2);

        }  else {
            timeConverted = parseInt(s.substring(0, 2), 10) + 12;
        }
    }
    return timeConverted + s.substring(2, 8);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
