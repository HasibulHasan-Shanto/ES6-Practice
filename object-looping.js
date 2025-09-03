const numbers = [23, 45, 32, 54, 67, 78];
for(const num of numbers){
    console.log(num)
}

// kono akta object er moddhe jodi loop chalate chai tahole for...in use korte hoy. for...of use kora jabe na.
// example:

const employee = {
    name: "Hasibul Hasan Shanto",
    age: 24,
    position: "Web Developer",
    salary: 15000,
    experience: 3
}
for(const emy in employee){
    const values = employee[emy]
    console.log(emy, values)
}