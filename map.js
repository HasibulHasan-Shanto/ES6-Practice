const numbers = [1, 2, 3, 4, 5];
const doubled = [];
for(const num of numbers){
    const double = num * 2
    doubled.push(double)
}
console.log(doubled);

// kono akta array er proti ta element er upor kono akta operation apply kore notun akta array create korar jonne map use kora hoy. map er vitor je function ta thake seta proti ta element er upor apply hoye notun array return kore.

const doubleIt = num => num * 4
const result = numbers.map(doubleIt)
console.log(result)
// amra chaile map er vitor arrow function o use korte pari
const result2 = numbers.map(num => num * 5)
console.log(result2)

const friends = ['abul', 'babul', 'cabul', 'dabul', 'ebul']

const nameLengths = friends.map(friend => friend.length)
console.log(nameLengths)
const firstLetters = friends.map(friend => friend[0])
console.log(firstLetters)

const anotherResult = numbers.map((num, index) => {
    console.log(num*index)
    return index
})