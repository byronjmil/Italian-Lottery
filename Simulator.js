const amountOfNumbersPlayed = require('./NumbersBeforeFirstDupe').amountBeforeFirstDupe;
const setSize = amountOfNumbersPlayed + 1;

let winnerCount = 0;
let loserCount = 0;

for (let i = 0; i < 100; i += 1) {
    const arr = [];
    const mySet = new Set();
    for (let j = 0; j < setSize; j += 1) {
        const uintArr = new Uint16Array(3);
        crypto.getRandomValues(uintArr);
        let str = '';
        uintArr.forEach(element => {
            str += String(element % 10);
        });
        arr.push(str);
        mySet.add(str);
    }
    if (arr.length === mySet.size) {
        loserCount += 1;
    }
    else {
        winnerCount += 1;
    }
}

console.log(`${winnerCount}%`);

console.log('---------------------------');