// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string 
// If more than one longest word, put into and array
// Ex 0. longestWord('Hello, my name is Omar Enrique Castro') === 'Enrique'
// Ex 1. longestWord('Hello there, my name is Omar') === ['Hello', 'there']

function longestWord(sen) {
    // Create fildetered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    // Sort by length
    const sorted = wordArr.sort(function(a, b) {
        return b.length - a.length
    });

    console.log(sorted)
}


// CHALLENGE 2: ARRAY CHUNKING 
// Split an array into chunked arrays of a specific length
// Ex 0. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]]
// Ex 1. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2], [3, 4], [5, 6], [7]]

function chunkArray(arr, len) {}


// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// Ex 0. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {}


// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// Ex 0. 'elbow' === 'below'
// Ex 1. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}


// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// Ex 0. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}


// Call Function
const output = longestWord('Hello there, my name is Omar Enrique Castro');
console.log(output);