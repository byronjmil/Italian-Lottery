const fillSet = () => {
    const mySet = new Set();
    while (mySet.size !== 5) {
        const uintArr = new Uint16Array(3);
        crypto.getRandomValues(uintArr);
        let str = '';
        uintArr.forEach(element => {
            str += String(element % 10);
        });
        mySet.add(str);
    }
    return mySet;
}

let dr = fillSet();

while (
    dr.has('321') === false ||
    dr.has('685') === false
) {
    dr = fillSet();
}

console.log(dr);
