const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num * 5))

numbers.forEach(num => {
    const doubled = num * 3
    console.log(doubled)
})