// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// Ex. reverseString('hello') == 'olleh'

function reverseString(str) {
    // FIRST SOLUTION: Turn string into an array
    // const strArr = str.split('');
    // strArr.reverse();
    // return strArr.join('');
    // return str.split('').reverse().join('') // After cleaning it up


    // SECOND SOLUTION: Use a decrementing for loop
    // let revString = '';
    // for(let i = str.length - 1; i >= 0; i--) {
        // revString = revString + str[i];
    // }
   //  return revString;


    // THIRD SOLUTION: Use an incrementing for loop
    // let revString = '';
    // for(let i = 0; i <= str.length - 1; i++) {
        // revString = str[i] + revString;
    // }
    // return revString;


    // FOURTH SOLUTION: Use a for of loop (Modern JS - ES6) 
    // let revString = '';
    // for(let char of str) {
        // revString = char + revString;
    // }
    // return revString;


    // FIFTH SOLUTION: Use a higher order array method like for each
    // let revString = '';
    // str.split('').forEach(function(char) {
        // revString = char + revString;
    // });
    // return revString;

    // ES6 style implementation with an arrow function
    // let revString = '';
    // str.split('').forEach(char => revString = char + revString);
    // return revString;

    // SIXTH SOLUTION: Use the high order array method reduce
    // return str.split('').reduce(function(revString, char) {
        // return char + revString;
    // }, '');

    //ES6 style
    return str.split('').reduce((revString, char) => char + revString, '');
}


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not 
// Ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {

}


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// Ex. reverseInt(521) === 125

function reverseInt(int) {

}


// CHALLENGE 4: CAPITALIZE LETTERS 





// Call Function
const output = reverseString('hello');
console.log(output);