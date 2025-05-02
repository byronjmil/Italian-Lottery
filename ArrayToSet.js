const previousPicks = require('./PastDrawings').globalArr;

previousPicks.length = 1058;

const mySet = new Set();

previousPicks.forEach(element => {
    mySet.add(element);
});

console.log(`Array size = ${previousPicks.length}`);
console.log(`MySet size = ${mySet.size}`);

const myPicks = new Set();

while (myPicks.size < 5) {
    const uintArr = new Uint32Array(3);
    crypto.getRandomValues(uintArr);
    let str = '';
    uintArr.forEach(element => {
        str += String(element % 10);
    });
    if (!previousPicks.includes(str)) {
        myPicks.add(str);
    }
};

console.log(myPicks);

// console.log(previousPicks.length);
// console.log(previousPicks.includes('627'))
