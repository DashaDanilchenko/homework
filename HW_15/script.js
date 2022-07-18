//1
// You are given a variable celsius representing a temperature in Celsius.
// Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
// Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.


function convertCtoF(celsius) {
    let fahrenheit;
    fahrenheit = celsius*9/5 + 32;
    return fahrenheit;
  } 
  convertCtoF(30);


// 2
// Your result must be a string.

function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  console.log(reverseString("hello"));


//3
// Only integers greater than or equal to zero will be supplied to the function.


function factorialize(num) {
    return num ? num * factorialize(num - 1) : 1;
  }
  
  console.log(factorialize(5));


//4
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
    return (str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a)).length
    
    }
    console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


// 5    
// Return an array consisting of the largest number from each provided sub-array.

function largestOfFour(arr) {
    let numArr = []
    for (let i=0; i<arr.length; i++) {
      numArr.push(arr[i].reduce((a, b) => (a > b) ? a:b))
    }
  
    return numArr;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


//6
// Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
    let a = []
    let b = []
   str = str.split("").reverse()
   target = target.split("").reverse()
  for (let i=0; i<target.length; i++) { 
        a.push(target[i])
        b.push(str[i])
  }
  a = a.join('')
  b = b.join('')
  if (a === b) {
    return true
  } else {
  return  false}
  }
  
  console.log(confirmEnding("Bastian", "ian"));


  // 7
// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  let strRepeat = []
  if (num < 0)  {
    return strRepeat.join('')
  }
  for (let i = 0; i<num; i++) {
    strRepeat.push(str)
  }
  return strRepeat.join('');
}

console.log(repeatStringNumTimes("abc", -2));


//8
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (str.split('').length < num) {
    return str 
  } 
  if (str.split(', ')[0].split('').length === num) {
    return str.split(', ')[0]
  }
  else {  
str = str.slice(0, num).split(', ')
console.log(str)
let a = str.splice(2, 0, '...')
str = str.join('')
console.log(a)
console.log(str) 
  } 
return str
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 10));


// 9
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined

function findElement(arr, func) {
  
  return  arr.filter(func)[0]
   
  }
  console.log(findElement([1, 2, 3, 9], num => num % 2 === 0));


// 10
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
  if (bool === Boolean(bool)) {
    return true
  } else {
    return false
  }
}

console.log(booWho(false));


// 11
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {

  let a = str.toLowerCase().split(' ')
  let b = []
  for (let i=0; i<a.length; i++) {
    let firstLetter = a[i][0].toUpperCase()
    let nextLetter = a[i].slice(1, (a[i].length))
    let word = firstLetter + nextLetter
     b.push(word) 
  }
  
 return b.join(' ')
  
}

console.log(titleCase("I'm a little tea pot"));


// 12
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let a = []
  for (let i=0; i<n; i++) {
    a.push(arr2[i])
  }
  for (let i=0; i<arr1.length; i++) {
    a.push(arr1[i])
  }
  for (let i=n; i<arr2.length; i++) {
    a.push(arr2[i])
  }
  return a;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));