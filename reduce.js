const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (const number of numbers) {
    sum += number;
}
console.log(sum);

const total = numbers.reduce((acc, curr) => acc+ curr, 0);
console.log(total)