// 1
// We have defined a variable called yourArray.
// Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable. 
// Your array should contain at least one string, one number, and one boolean.

let yourArray = [1, 2, 'a', 'b', true]

console.log(yourArray)

// 2
// In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides the letter b

let myArray = ["a", "b", "c", "d"];
myArray[1] = "not b anymore"

console.log(myArray);


// 3
// We have defined a function, mixedNumbers, which we are passing an array as an argument.
// Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array 
// and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.

function mixedNumbers(arr) {
    
  arr.unshift('I', 2, 'three')
  arr.push(7, 'VIII', 9)
    
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));
