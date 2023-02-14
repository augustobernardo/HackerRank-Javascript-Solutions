'use strict';

function main() {
    const S = 'za';

    try {
        var num = parseInt(S) || error;
        console.log(num);
    } 
    catch (error) {
        console.log("Bad String");
    }
}
main();