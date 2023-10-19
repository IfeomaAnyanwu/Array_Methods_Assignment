//Question 1 . Write a function to check if input is an array
// IsArray checks if an object is an array and returns true or false.
//syntax = Array.isArray(value);
function checkArray() {
  const numbers = [1, 2, 4, 0];
  const text = "W3resource";
  let answer = Array.isArray(numbers);
  let answer2 = Array.isArray(text);
  console.log(answer);
  console.log(answer2);
}

checkArray();
//===============================================================================
//Question 2. write a function to clone an array
//map method: The Array.map() method creates a new array from the results of calling a function for every element.
//syntax: array.map(function(currentValue, index, arr), thisValue)
//function()	Required. A function to be run for each array element.
//currentValue	Required.The value of the current element.
//index	Optional.The index of the current element.
//arr	Optional. The array of the current element.
//thisValue	Optional.Default value undefined.A value passed to the function to be used as its this value.
const arrayOfNumbers = [1, 2, 4, 0];
function displayNumber(num) {
  return num;
}

function cloneArray() {
  const clonedArray = arrayOfNumbers.map(displayNumber);
  console.log(clonedArray);
  //function that displays numbers
}

cloneArray();
//console.log(displayNumber(4));

//==============================================================================
//Question 3: write a function to get and return first element of array
//The slice() method is used to extract a part of an array and returns a new array containing the extracted elements. It does not change the original array.
//syntax=array.slice(start, end);
const elements = [7, 9, 0, -2, 3, 6];

function firstElement() {
  const elements = [7, 9, 0, -2, 3];
  console.log(`I am the array to be sliced: ${elements.map(displayNumber)}`);
  //slice 1st element
  const firstElement = elements.slice(0, 1);
  console.log(`Sliced first element is ${firstElement}`);
  //slice all elements
  const allElements = elements.slice(0, 0);
  console.log(allElements);
  //slice 1st 3 elements
  const firstThree = elements.slice(0, 3);
  console.log(firstThree);
  //slice 1st four elements
  const firstFour = elements.slice(0, 4);
  console.log(firstFour);
}

firstElement();
//=============================================================================
//Question 4
//Write a function to get the last element of an array and return the last;
const elements2 = [7, 9, 0, -2];
const elements3 = [7, 9, 0, -2, 3];
function lastElement() {
  // display last element
  const lastElement = elements2[elements2.length - 1];
  console.log(lastElement);
  //display 2nd to 4th elements
  const secondToFourth = elements3.slice(1, 4);
  console.log(secondToFourth);
  ////display 1st to 4th elements
  const firstToFourth = elements3.slice(0, 4);
  console.log(firstToFourth);
}
lastElement();

//============================================================================
//Question 5
//Write a javascript program to join elements of an array to a string
//syntax: array.toString();

const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join("+").toString());

//============================================================================
//Quest 6
//Write a function that checks if an array of integers contains only prime numbers

const checkPrime = [2, 3, 5, 7];
const checkPrime2 = [2, 3, 5, 7, 8];
function check(array) {
  for (z of array) {
    if ((z == 1) | ((z > 2) & (z % 2 == 0))) return false;
  }
  return true;
}
console.log(check(checkPrime));
console.log(check(checkPrime2));

//==============================================================
//Quest 7
//Write javscript function to remove null, 0, "", undefined and NaN from array
// filter () method creates a new array with every element in array that passes a test.
//syntax: array.filter(function(currentValue, index, arr), thisValue)
//function()	Required. A function to be run for each array element.
//currentValue	Required.The value of the current element.
//index	Optional.The index of the current element.
//arr	Optional. The array of the current element.
//thisValue	Optional.Default value undefined.A value passed to the function to be used as its this value.

let array = [NaN, 0, 15, false, -22, undefined, 47, null];
function removeFalsyValues(arr) {
  return array.filter((truthy) => {
    if (truthy) {
      return truthy;
    }
  });
}

console.log(removeFalsyValues(array));
//==============================================================
//Quest 8
//Write a javascript program that accepts a number as input and inserts dash between each even number;

const num = 025468; // Explain
console.log(num);
const str = num.toString(); //Explain
const result = [str[0]];

for (var x = 1; x < str.length; x++) {
  //explain why x-1
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push("-", str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(""));

//===============================================================
