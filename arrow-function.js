console.log("Hello arrow function");

//function declaration
add(10, 20);
function add (num1, num2){
    return num1 + num2;
}

// function expression
const addition = function add (num1, num2){
    return num1 + num2
}
const result = addition(20, 30)
console.log(result)

// arrow function

const addition2 = (num1, num2) => num1 + num2