const employee = {
    name: "Hasibul Hasan Shanto",
    age: 24,
    position: "Web Developer",
    salary: 15000,
    experience: 3
}

//  jodi amra chai kono object er property ke modify na korte tahole amra Object.freeze() method use korte pari

// Example:

Object.freeze(employee)
// kono akta object theke kono property ke delete kora jonno delete nake keyword ase jeta sei property ke delete kore dey 
// Example:

delete employee.experience
console.log(employee)



