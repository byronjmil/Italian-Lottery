const previousPicks = require('./PastDrawings').globalArr;
const snapshotSize = 37;
previousPicks.length = snapshotSize;

let duplicateFound = true;

let mySet = new Set();

for (let i = 0; i < previousPicks.length; i += 1) {
    mySet.add(previousPicks[i]);
}

if (mySet.size === 37) {
    duplicateFound = false;
}
else {
    duplicateFound = true;
}

if (duplicateFound) {
    console.log(`DUPS FOUND... :(`);
}
else {
    console.log(`NO DUPES FOUND :)`)
}
