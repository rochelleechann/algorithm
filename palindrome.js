// Question #1
// Write a function that checks if an inputted value is a palindrome. 
// The function should return true/false (bool). 
// You can assume that all input will be a string type and lower case.


// First Solution
// 1. Simple solution using .split(). This is needed to split the string into an array
// 2. After we can the javascript method .reverse() to reverse the order of the array
// 3. .join() simply concatenate the array back to a string
// 4. Use strict type to compare the input passed to the reverse string variable

function checkIfPalindrome(input) {
    // regex expression to find spaces
    const regexExp = /\s/g; 
    // using regex expression to replace with empty string
    const original = input.replace(regexExp, '');
    const reverseInput = original.split('').reverse().join('');
    return reverseInput === original;
};

// Test cases to run
const firstInput = 'eye';
const secondInput = 'race car';
const thirdInput = 'never odd or even';
const fourthInput = 'test';

// Calling the function and passing each variable
console.log('First Test Case:', checkIfPalindrome(firstInput));
console.log('Second Test Case:', checkIfPalindrome(secondInput));
console.log('Third Test Case:', checkIfPalindrome(thirdInput));
console.log('Fourth Test Case:', checkIfPalindrome(fourthInput));