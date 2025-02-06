let numberOfGames = 10;
let numberOfDrawings = 1;

let winningProbability = numberOfGames / 1000;
let notWinningProbability = 1 - winningProbability;

let done = (notWinningProbability ** numberOfDrawings) < winningProbability

while (!done) {
    numberOfDrawings += 1;
    done = (notWinningProbability ** numberOfDrawings) < winningProbability
}

console.log(numberOfDrawings);
