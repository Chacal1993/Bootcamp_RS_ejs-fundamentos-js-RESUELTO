// Take an array of numbers and make them strings
// Example input [2, 5, 100] ex output: ["2", "5", "100"]

function stringItUp(numbers) {
    // your code here
    let temp = [];
    for (let iter1 of numbers) {
        if (typeof iter1 === 'number')
            temp.push(iter1.toString())
        else
            temp.push(iter1);
    }
    return temp;
}




let test = require('../test.js');

test(stringItUp, [[2, 5, 100]], ["2", "5", "100"]);
test(stringItUp, [[]], []);
test(stringItUp, [[1]], ["1"]);