const previousDrawings = require('./PastDrawings').globalArr;

let done = false;
let i = 0;

let arr = [];

while (!done) {
    if (i === previousDrawings.length || arr.includes(previousDrawings[i])) {
        done = true;
    }
    else {
        arr.push(previousDrawings[i]);
        i += 1;
    }
}

console.log(arr.length);
console.log(arr.sort());

console.log('---------------------------');

module.exports.amountBeforeFirstDupe = arr.length;