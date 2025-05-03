function findLargestGap(arr) {
    let map = {};  // To store the last index where each element appeared
    let largestGap = { element: null, distance: 0 };

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        if (map[num] !== undefined) {
            const gap = i - map[num];
            if (gap > largestGap.distance) {
                largestGap = { element: num, distance: gap };
            }
        }

        // Update the last index of the current element
        map[num] = i;
    }

    return largestGap;
}

// Example usage
const arr = require('./PastDrawings').globalArr;
console.log(findLargestGap(arr));
