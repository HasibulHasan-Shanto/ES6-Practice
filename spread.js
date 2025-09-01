console.log("Spread js");

const numbers = [23, 54, 32, 67, 89, 45, 90];
console.log(...numbers);
const max = Math.max(...numbers);
console.log(max);

const first = [23, 45, 67];
const second = [...first]
second.push(99);
console.log(first)
console.log(second)