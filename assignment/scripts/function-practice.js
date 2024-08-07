console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(`helloName function: ${helloName('person')}`);

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(`4 plus 5 equals ${addNumbers(4,5)}`);

// 4. Function to multiply three numbers & return the result
function multiplyThree(numOne, numTwo, numThree) {
  return numOne*numTwo*numThree;
}
console.log(`3 times 4 times 5 is ${multiplyThree(3,4,5)}`);

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(`1 is a positive number: ${isPositive(1)}`);
console.log(`-2 is a positive number: ${isPositive(-2)}`);

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if(array.length > 0){
    return array[array.length-1];
  }
  return undefined;
}
let arrayOne = ['One', 'Two', 'Three'];
let arrayTwo = []
console.log(getLast(arrayOne));
console.log(getLast(arrayTwo));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for(let i =0; i < array.length; i++){
    if(array[i] === value){
      return true;
    }
  }
  return false;
}
console.log(`Three is found in arrayOne: ${find('Three', arrayOne)}`);
console.log(`Four is found in arrayOne: ${find('Four', arrayOne)}`);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(string.charAt(0)===letter){
    return true;
  }
  return false;
}
console.log(`Pterodactyl starts with P: ${isFirstLetter('P', 'Pterodactyl')}`);

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  // TODO: return the sum
  return sum;
}
let numArray = [1,3,-4,7,0,2];
console.log(`Sum of numArray: ${sumAll(numArray)}`);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  let posArray = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] > 0){
      posArray.push(array[i]);
    }
  }
  return posArray;
}
console.log('Positives in numArray: ' + allPositive(numArray));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
