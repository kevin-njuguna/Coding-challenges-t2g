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

console.log(isNegative(-23));
console.log(isNegative(55));

//challenge 5 : Can I Drive
function canDrive(name, age) {
  if (age >= 18) {
    return `${name} is old enough to drive.`
  } else {
    return `${name} is not old enough to drive yet.`
  }
}
console.log(canDrive("Jane", 22))
console.log(canDrive("June", 12))
