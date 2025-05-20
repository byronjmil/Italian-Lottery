const previousDrawings = require('./PastDrawings').globalArr;

let done = false;
let i = 0;

let frontPairArray = [];

while (!done) {
    let str = `${previousDrawings[i][0]}${previousDrawings[i][1]}`;
    if (i === previousDrawings.length || frontPairArray.includes(str)) {
        done = true;
    }
    else {
        frontPairArray.push(str);
        i += 1;
    }
}

done = false;
i = 0;

let backPairArray = [];

while (!done) {
    let str = `${previousDrawings[i][1]}${previousDrawings[i][2]}`;
    if (i === previousDrawings.length || backPairArray.includes(str)) {
        done = true;
    }
    else {
        backPairArray.push(str);
        i += 1;
    }
}

console.log(`Front Pair Array Length: ${frontPairArray.length}`);
console.log(`Back Pair Array Length: ${backPairArray.length}`);
console.log('---------------------------');

let finalArr = [];

if (frontPairArray.length > backPairArray.length) {
    console.log('Front Pair');
    finalArr = frontPairArray;
}
else {
    console.log('Back Pair');
    finalArr = backPairArray;
}

console.log(finalArr);

console.log('---------------------------');

while (finalArr.length < 25) {
    const uintArr = new Uint16Array(2);
    crypto.getRandomValues(uintArr);
    let str = '';
    uintArr.forEach(element => {
        str += String(element % 10);
    });
    if (!finalArr.includes(str)) {
        finalArr.push(str);
    }
}

console.log(finalArr.sort());

module.exports.amountBeforeFirstDupe = finalArr.length;