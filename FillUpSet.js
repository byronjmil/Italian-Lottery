const mySet = new Set();
let drawings = 0;

while (mySet.size !== 1000) {
    drawings += 1;
    const uintarr = new Uint16Array(1);
    crypto.getRandomValues(uintarr);
    mySet.add(uintarr[0] % 1000);
}

console.log(`Number of drawings to complete: ${drawings}`); // 7105
