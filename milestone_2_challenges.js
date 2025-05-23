function sumOfPositives(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

sumOfPositives([1, -3, 5, -2, 9, -8]);
//console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));

// Challenge 2: Find Maximum Value
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

findMax([3, 7, 2, 9, 5]);
//console.log(findMax([3, 7, 2, 9, 5]));

// Challenge 3: Election Winner
function findWinner(candidates) {
  let winner = candidates[0];
  for (let i = 1; i < candidates.length; i++) {
    if (candidates[i].votes > winner.votes) {
      winner = candidates[i];
    }
  }
  return winner;
}

const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 },
];

findWinner(candidates);
console.log(findWinner(candidates));
