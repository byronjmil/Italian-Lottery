function getSnapshots(arr, snapshotSize) {
    const snapshots = [];

    // Loop through the array and create snapshots
    for (let i = 0; i <= arr.length - snapshotSize; i++) {
        snapshots.push(arr.slice(i, i + snapshotSize)); // Take a snapshot of size `snapshotSize`
    }

    return snapshots;
}

const arr = require('./PastDrawings').globalArr;
const snapshotSize = 38;
const snapshots = getSnapshots(arr, snapshotSize);

let winnerCount = 0;
let loserCount = 0;

snapshots.forEach(snapshot => {
    const mySet = new Set();
    snapshot.forEach(element => {
        mySet.add(element);
    });
    if (mySet.size < snapshotSize) {
        winnerCount += 1;
    }
    else {
        loserCount += 1;
    }
});

console.log(winnerCount);
console.log(loserCount);