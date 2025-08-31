console.log("Hello ES6");

// Today I'm going to learn about ES6 default parameters
// Default parameters allow named parameters to be initialized with default values if no value or undefined is passed.

// Example 

function sum (num1, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
}
sum(10);
sum(10, 5);
