function birthdayProblem(n) {
    const daysInYear = 1000; // Assume there are 365 days in a year
    let probability = 1;

    for (let i = 0; i < n; i++) {
        // For each person, calculate the chance they don't share a birthday with someone else already in the group
        probability *= (daysInYear - i) / daysInYear;
    }

    // The probability that at least two people share a birthday is the complement of the above probability
    return 1 - probability;
}

const amountOfNumbersPlayed = require('./NumbersBeforeFirstDupe').amountBeforeFirstDupe;

for (let i = 1; i <= amountOfNumbersPlayed + 1; i += 1) {
    let result = birthdayProblem(i);
    console.log(`${i} = ${(result * 100).toFixed(2) * 1}%`);
}

console.log('---------------------------');
