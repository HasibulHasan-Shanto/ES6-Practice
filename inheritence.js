class Animal {
    constructor(name, age){
        this.name = name 
        this.age = age
    }
    eat(){
        console.log(`${this.name} is eating`)
     }
}



class Dog extends Animal {
    constructor(name, age, breed){
        // this.name = name
        // this.age = age
        super(name, age)
        this.breed = breed
        
    }

    // eat(){
    //     console.log(`${this.name} is eating`)
    // }
    bark(){
        console.log(`${this.name} is barking`)
    }
}

class Cat extends Animal {
    constructor(name, age, color){
        // this.name = name
        // this.age = age
        super(name, age)
        this.color = color
    }
    //     eat(){
    //     console.log(`${this.name} is eating`)
    // }
    mew(){
        console.log(`${this.name} is mewing`)
    }
}
const dog = new Dog('coffee', 3, 'Pharsian')
console.log(dog)

const cat = new Cat('Tomy', 4, 'white')
console.log(cat)
cat.eat()