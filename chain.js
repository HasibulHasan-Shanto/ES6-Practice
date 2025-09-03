const student = {
    name: 'Hasibul Hasan Shanto',
    age: 24,
    marks: {
        math: 89,
        physics: 92,
        chemistry: 88
    }
}
console.log(student)
console.log(student.marks.physics);

//jokhon kono akta object er moddhe onno akta object thake tokhon seta ke amra nested object bole thaki. and jodi object er moddhe kono property na theke and seta ke jodi access korte cai tahole amader undefined dekhabe. karon seta object er moddhe nai. seta thik korar jonno amra sei property name er por ekta question mark (?) dite pari. jeta bole dibe je jodi sei property name ta thake tahole seta ke access korbe r jodi na thake tahole seta ke undefined dekhabe.

console.log(student.address?.city);