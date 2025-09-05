class Player {

    constructor(name, age){
        // console.log('here is constructor', name);
        this.name = name
        this.age = age
    }
    goal(){
        console.log('Goal is here!');
    }
}

const player1 = new Player('shanto', 24);
const Player2 = new Player('Hasibul Hasan Shanto', 24);
console.log(player1);
console.log(Player2);
// Player1.goal()