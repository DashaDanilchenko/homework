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