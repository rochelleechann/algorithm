// Question #2
// Write a function that checks if an inputted value is a numerical range "100-200". 
// Inputted values can be an integer or a string in the previously stated format. 
// The return should be a true/false (bool) value. Ranges should also allow floats (e.g. "100.00"). 
// The range should also be listed as min/max order. Valid values: 100-200, 100.0-200.1. Invalid Values: 100, 200-100.


// Solution
// 1. Based on the single input, convert a string to substrings using (-) and places them into a new array by using .split()
// 2. In order to compare values, we need to convert the string to a number by using Number() method. I used Number() because parseInt() converts string to integer and parseFloat() converts a number to a float. In this case the input can be an interger or a float
// 3. Created a simple for loop to loop through the small array and compare values using index.
// 4. If the first index is greater than second index, then it is not a valid range
function checkIfValidRange(input) {
    // check if input has two values
    const regexExp = /[-]/g

    // First check to see if it contains a range of numbers
    if (input.match(regexExp)) {
        const convert = input.split('-').map(item => {
            return Number(item);
        });
    
        for(let i = 0; i < convert.length; i++) {
            if(convert[0] < convert[1]) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}

// Test cases to run
const firstInput = 100 + '-' + 200;
const secondInput = '100-200';
const thirdInput = '100.0-200.1';
const fourthInput = '200-100';
const fifthInput = 200 + '-' + 100;
const sixthInput = '100';

// Calling the function and passing each variable
console.log('First Test Case:', checkIfValidRange(firstInput));
console.log('Second Test Case:', checkIfValidRange(secondInput));
console.log('Third Test Case:', checkIfValidRange(thirdInput));
console.log('Fourth Test Case:', checkIfValidRange(fourthInput));
console.log('Fifth Test Case:', checkIfValidRange(fifthInput));
console.log('Sixth Test Case:', checkIfValidRange(sixthInput));