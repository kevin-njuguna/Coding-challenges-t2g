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
//console.log(findWinner(candidates));

// Challenge 4: Longest Word
function findLongestWord(words) {
  let longest = words[0];
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

findLongestWord(["apple", "banana", "pear", "grapefruit"]);
//console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));

// Challenge 5: Count Properties
function countProperties(obj) {
  return Object.keys(obj).length;
}

countProperties({ name: "Alice", age: 25, city: "Paris" });
//console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));

// Challenge 6: Filter by Length
function filterByLength(strings, minLength) {
  let result = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length >= minLength) {
      result.push(strings[i]);
    }
  }
  return result;
}

filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5);
//console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));

// Challenge 7: Sum of Even Numbers
function sumEvenNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

sumEvenNumbers([1, 2, 3, 4, 5, 6]);
//console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

//Challenge 8: Difference of Sum of Even and Odd Numbers
function differenceEvenOdd(numbers) {
  let evenNumSum = 0;
  let OddNumSum = 0;
  for (let num of numbers) {
    if (num % 2 === 0) {
      evenNumSum += num;
    } else {
      OddNumSum += num;
    }
  }
  return evenNumSum - OddNumSum;
}

differenceEvenOdd([1, 2, 3, 4, 5, 6]);
//console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));

// Challenge 9: Count Truthy
function countTruthy(obj) {
  let count = 0;
  for (let key in obj) {
    if (Boolean(obj[key])) {
      count++;
    }
  }
  return count;
}

countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null });
//console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));

// Challenge 10: Average of Numbers
function average(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

average([2, 4, 6, 8]);
//console.log(average([2, 4, 6, 8]));

average([]);
//console.log(average([]));

// Challenge 11: Linear Search
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

linearSearch([5, 3, 7, 1, 4], 7);
//console.log(linearSearch([5, 3, 7, 1, 4], 7));

linearSearch([5, 3, 7, 1, 4], 10);
//console.log(linearSearch([5, 3, 7, 1, 4], 10));

// Challenge 12: Reverse Linear Search
function reverseLinearSearch(arr, value) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

reverseLinearSearch([5, 3, 7, 1, 4, 7], 7);
//console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7));

reverseLinearSearch([5, 3, 7, 1, 4], 10);
//console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10));

// Challenge 13: Linear Search All Indices
function linearSearchAll(arr, value) {
  let indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      indices.push(i);
    }
  }
  return indices;
}

linearSearchAll([5, 3, 7, 1, 4, 7], 7);
//console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7));

linearSearchAll([5, 3, 7, 1, 4], 10);
//console.log(linearSearchAll([5, 3, 7, 1, 4], 10));

// Challenge 14: Count Occurrences
function countOccurrences(strings) {
  let result = {};
  for (let i = 0; i < strings.length; i++) {
    let word = strings[i];
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }
  return result;
}

countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]);

/* console.log(
  countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]),
);
 */

// Challenge 15: Remove Duplicates
function removeDuplicates(arr) {
  let seen = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}

removeDuplicates([1, 2, 3, 2, 4, 1, 5]);
//console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));

// Challenge 16: Most Frequent
function mostFrequent(arr) {
  let frequency = {};
  let maxCount = 0;
  let mostFrequentItem = null;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (frequency[item]) {
      frequency[item]++;
    } else {
      frequency[item] = 1;
    }

    if (frequency[item] > maxCount) {
      maxCount = frequency[item];
      mostFrequentItem = item;
    }
  }
  return mostFrequentItem;
}

mostFrequent([1, 2, 2, 3, 3, 3, 4]);
console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));

mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]);
console.log(
  mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]),
);
