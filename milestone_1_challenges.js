//Challenge 1: Sum of Two Numbers
function addition(num1, num2) {
  return num1 + num2;
}

//console.log(addition(3, 5))
//console.log(addition(-6, 9))

//challenge 2 : Convert Minutes into Seconds
function convert(min) {
  return min * 60;
}

//console.log(convert(5));
//console.log(convert(2));

//challenge 3: Perimeter of a Rectangle
function findPerimeter(length, width) {
  return 2 * (length + width);
}

//console.log(findPerimeter(6, 7));
//console.log(findPerimeter(20, 10));

//challenge 4 : Check Negative
function isNegative(num) {
  return num < 0;
}

//console.log(isNegative(-23));
//console.log(isNegative(55));

//challenge 5 : Can I Drive
function canDrive(name, age) {
  if (age >= 18) {
    return `${name} is old enough to drive.`;
  } else {
    return `${name} is not old enough to drive yet.`;
  }
}
//console.log(canDrive("Jane", 22))
//console.log(canDrive("June", 12))

//challenge 6 : Largest Number
function findLargest(a, b, c) {
  return Math.max(a, b, c);
}

//console.log(findLargest(5, 9, 3));
//console.log(findLargest(10, 10, 10));
//console.log(findLargest(-1, -5, -3));

//challenge 7 : BMI Calculator
function calculateBMI(weight, height) {
  const bmiRaw = weight / (height * height);
  const bmi = Math.round(bmiRaw * 10) / 10;
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  return "Your BMI is " + bmi + " - " + category;
}

//console.log(calculateBMI(68, 1.75));
//console.log(calculateBMI(85, 1.8));

//challenge 8 : Greeting Based on Time
function greetUser(name, hour) {
  if (hour >= 5 && hour <= 11) {
    return `Good morning, ${name}!`;
  } else if (hour >= 12 && hour <= 17) {
    return `Good afternoon, ${name}!`;
  } else if (hour >= 18 && hour <= 21) {
    return `Good evening, ${name}!`;
  } else {
    return `Good night, ${name}!`;
  }
}

//console.log(greetUser("Alice", "7"));
//console.log(greetUser("Alice", "13"));
//console.log(greetUser("Alice", "20"));
//console.log(greetUser("Alice", "23"));

//challenge 9 : FizzBuzz
function fizzBuzzCheck(number) {
  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return number.toString();
}

//console.log(fizzBuzzCheck(3));

//console.log(fizzBuzzCheck(10));

//console.log(fizzBuzzCheck(15));

//console.log(fizzBuzzCheck(7));

//challenge 10 : Perimeter 2
function perimeter(shape, number) {
  if (shape === "s") {
    return 4 * number;
  } else if (shape === "c") {
    return 6.28 * number;
  } else {
    return "Invalid shape";
  }
}

console.log(perimeter("s", 7));
console.log(perimeter("c", 4));
