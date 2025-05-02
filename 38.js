const previousPicks = require('./PastDrawings').globalArr;

const mySet = new Set();
const arr = [];

for (let i = 0; i < 37; i += 1) {
    mySet.add(previousPicks[i]);
    arr.push(previousPicks[i]);
}

function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();

    for (const item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }

    return [...duplicates]; // Convert the Set back to an array
}

console.log(mySet.size);
console.log(findDuplicates(arr))