function processData(input) {
    let lines = input.split(' '); // [ '9', '6', '2015\n6', '6', '2015' ]
    let actualDate = lines.slice(0, 3);
    let expectedDate = lines.slice(3, 6);
    
    let newLine = actualDate[2].includes('\n');
    if (newLine) {
        let year = actualDate[2].split('\n');
        actualDate[2] = year[0];
        expectedDate.unshift(year[1]);
    }
    
    let actualDay = parseInt(actualDate[0]);
    let actualMonth = parseInt(actualDate[1]);
    let actualYear = parseInt(actualDate[2]);
    let expectedDay = parseInt(expectedDate[0]);
    let expectedMonth = parseInt(expectedDate[1]);
    let expectedYear = parseInt(expectedDate[2]);
    let fine = 0;
    
    if (actualYear > expectedYear) {
        fine = 10000;
    }
    else if (actualYear === expectedYear) {
        if (actualMonth > expectedMonth) {
            fine = 500 * (actualMonth - expectedMonth);
        }
        else if (actualMonth === expectedMonth) {
            if (actualDay > expectedDay) {
                fine = 15 * (actualDay - expectedDay);
            }
        }
    }
    console.log(fine);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
