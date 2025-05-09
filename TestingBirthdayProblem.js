const previousPicks = require('./PastDrawings').globalArr;
const snapshotSize = 37;
previousPicks.length = snapshotSize;

let winnerCount = 0;
let loserCount = 0;

let mySet = new Set();

for (let i = 0; i < previousPicks.length; i += 1) {
    mySet.add(previousPicks[i]);
}

if (mySet.size === 37) {
    loserCount += 1;
}
else {
    winnerCount += 1;
}

if (winnerCount > 0) {
    console.log(`HOLD`);
}
else {
    console.log(`GO`)
}
