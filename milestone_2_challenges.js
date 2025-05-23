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
console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));
