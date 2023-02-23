'use strict';

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here

    /** TODO
     * 1 - Find the pairs of numbers (only one pair)
     * 1.1 - Remove the pairs from the array
     * 2 - Move this pairs to a new array
     * 3 - Count the number of pairs
     * 4 - Return the number of pairs
     */
    let count = 0;
    let pairs = [];
    let pair = [];

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (ar[i] === ar[j]) {
                pair.push(ar[i]);
                pair.push(ar[j]);
                pairs.push(pair);
                pair = [];
                ar.splice(i, 1);
                ar.splice(j - 1, 1);
                n = ar.length;
                i = 0;
                j = 0;
                count++;
            }
        }
    }

    return count;
}

function main() {
    const n = 10; //parseInt(readLine().trim(), 10);

    const ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]; //readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);
}

main();
