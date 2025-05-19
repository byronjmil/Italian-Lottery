function birthdayProblem(n) {
    const daysInYear = 100; // Assume there are 365 days in a year
    let probability = 1;

    for (let i = 0; i < n; i++) {
        // For each person, calculate the chance they don't share a birthday with someone else already in the group
        probability *= (daysInYear - i) / daysInYear;
    }

    // The probability that at least two people share a birthday is the complement of the above probability
    return 1 - probability;
}

let i = 1;
let result = birthdayProblem(i);
console.log(`${i} = ${(result * 100).toFixed(2) * 1}%`);
while (result < .99) {
    i += 1;
    result = birthdayProblem(i);
    console.log(`${i} = ${(result * 100).toFixed(2) * 1}%`);
}

console.log('---------------------------');
