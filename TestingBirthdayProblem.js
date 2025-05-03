const previousPicks = require('./PastDrawings').globalArr;

let winnerCount = 0;
let loserCount = 0;

let arr = [];
let mySet = new Set();

for (let i = 0; i < previousPicks.length; i += 1) {
    if (i > 0 && i % 37 === 0) {
        if (mySet.size === 37) {
            loserCount += 1;
        }
        else {
            winnerCount += 1;
        }
        mySet.clear();
    }
    mySet.add(previousPicks[i]);
}

console.log(winnerCount);
console.log(loserCount);
