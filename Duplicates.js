// Method 1: Using a Set to find duplicates
function findDuplicatesWithSet(arr) {
    const seen = new Set();
    const duplicates = [];
    for (const element of arr) {
      if (seen.has(element)) {
        duplicates.push(element);
      } else {
        seen.add(element);
      }
    }
    return duplicates;
  }
  
  // Method 2: Using filter() and indexOf()
  function findDuplicatesWithFilter(arr) {
    return arr.filter((element, index, array) => {
      return array.indexOf(element) !== index;
    });
  }
  
  // Method 3: Using reduce() and an object to count occurrences
  function findDuplicatesWithReduce(arr) {
    const counts = arr.reduce((acc, element) => {
      acc[element] = (acc[element] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(counts).filter(element => counts[element] > 1);
  }
  
  // Example usage:
  const array = require('./PastDrawings').globalArr;
  
  console.log("Duplicates using Set:", findDuplicatesWithSet(array));
  console.log("Duplicates using filter:", findDuplicatesWithFilter(array));
  console.log("Duplicates using reduce:", findDuplicatesWithReduce(array));