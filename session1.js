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

    // ES6 style
    // return str.split('').reduce((revString, char) => char + revString, '');
}


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not 
// Ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(int) {
    // SOLUTION
    const revString = str.split('').reverse().join('');
    return revString === str;
}


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// Ex. reverseInt(521) === 125

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');
    return parseInt(revString) * Math.sign(int);

}


// CHALLENGE 4: CAPITALIZE LETTERS 
// Return a string with the first letter of every word capitalized
// Ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
    // FIRST SOLUTION
    // const strArr = str.toLowerCase().split(' ');

    // for(let i = 0; i < strArr.length; i++) {
        // strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    // }

    // return strArr.join(' ');

    
    // SECOND SOLUTION
    // return str
        // .toLowerCase()
        // .split(' ')
        // .map(function(word) {
            // console.log(word) ---- [quick test] no need to uncomment out
            // return word[0].toUpperCase() + word.substr(1);
        // })
        // .join(' ');


    // THIRD SOLUTION
    // return str
        // .toLowerCase()
        // .split('  ')
        // .map(word => word[0].toUpperCase() + word.substr(1))
        // .join(' ');

    // FOURTH SOLUTION
        return str.replace(/\b[a-z]/gi, function(char) {
            return char.toUpperCase();
        });
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// Ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function(char) {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });

    for(let char in charMap) {
        // debugger;
        if(charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}


// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. 
// For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz".
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
    for(let i = 1; i < 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if(i % 3 === 0) {
            console.log('Fizz');
        } else if(i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i)
        }    
    }
}

// Call Function

// const output = reverseString('hello');
// const output = isPalindrome('racecar');
// const output = reverseInt(-12345);
// const output = capitalizeLetters('i love javascript');
// const output = maxCharacter('aaabbbbbbcccedefefergojewguhuuruuwkkiw');
const output = fizzBuzz()
console.log(output);