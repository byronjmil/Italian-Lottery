const picks = [
    "227",
    "208",
    "634",
    "781",
    "590",
    "163",
    "471",
    "817",
    "332",
    "244",

    "138",
    "933",
    "927",
    "110",
    "142",
    "696",
    "473",
    "279",
    "632",
    "345",

    "333",
    "057",
    "251",
    "421",
    "003",
    "381",
    "787",
    "560",
    "089",
    "837",

    "290",
    "579",
    "460",
    "361",
    "726",
    "231",
    "466",
    "324",
    "884",
    "910",

    "338",
    "724",
    "809",
    "984",
    "834",
    "389",
    "300",
    "093",
    "467",
    "527",

    "112",
    "332",
    "964",
    "436",
    "307",
    "920",
    "913",
    "411",
    "203",
    "461",

    "416",
    "080",
    "636",
    "989",
    "063",
    "645",
    "398",
    "336",
    "649",
    "271",

    "747",
    "603",
    "737",
    "479",
    "499",
    "310",
    "832",
    "920",
    "443",
    "965",

    "393",
    "170",
    "576",
    "912",
    "785",
    "523",
    "678",
    "321",
    "820",
    "659",

    "046",
    "616",
    "092",
    "227",
    "288",
    "241",
    "625",
    "047",
    "228",
    "448",
];

const drawings = require('./PastDrawings').globalArr;

if (drawings.length > (2 * 23)) {
    drawings.length = (2 * 23);
}

let winner = false;
let numberOfWins = 0;

for (let i = 0; i < drawings.length; i += 1) {
    if ((i % 2 === 0) && (picks.includes(drawings[i]))) {
        console.log(`Winner! ${drawings[i]}`);
        winner = true;
        numberOfWins += 1;
    }
}

console.log(`Number of drawings: ${drawings.length / 2}`);
console.log(`Winner: ${winner} ${numberOfWins} time(s)`);
