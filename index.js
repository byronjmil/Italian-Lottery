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

// const uniquePicks = new Set(picks);

// console.log(uniquePicks.size);

const drawings = [
    "917",
    "731",
    "729",
    "829",
    "568",
    "439",
    "021",
    "512",
    "835",
    "977",
];

let winner = false;

drawings.forEach(draw => {
    if (picks.includes(draw)) {
        console.log(`Winner! ${draw}`);
        winner = true;
    }
});

console.log(`Number of drawings: ${drawings.length}`);
if (winner === false) {
    console.log(`Winner: ${winner}`);
}
