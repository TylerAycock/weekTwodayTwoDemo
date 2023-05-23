//create an object 

const person = {
    firstName: `Tyler`,
    lastName: `Aycock`,
    age: `29`
}

console.log(person.age) //also console.log(person[`age`]) would print the same thing 

//destructing values out 
let{firstName} = person 

// console.log(firstName) 

//renaming and then restructuring 
let {age:tylersAge, lastName} = person 
console.log(`hello my name is ${firstName} ${lastName} and I am ${tylersAge}`)

//adding a value 

person.job = `student`

console.log(person)

//loop through an object where you want to print each of the values 

for(let key in person) {
    console.log(person[key])
}

//delete an attribute from the object 
delete person.age 
console.log(person)

//creating a class 

class Robot {
    constructor (name, health, attack){
        this.name = name,
        this.health = health,
        this.attack = attack 
    }
   takeDamage(param) {                  //added a custom behavior that both robots will know essentially a function 
    this.health -= param
   } 
   checkSelf() {
    for(let i in this) {
        console.log(`${i}: ${this[i]}`)       //
    }
   }
}

let bob = new Robot(`Bob`, 100, 20)
let tim = new Robot(`Tim`, 75, 40)
console.log(bob)
console.log(tim)

tim.takeDamage(bob.attack)
console.log(tim)

tim.checkSelf() //runs the 2nd loop 

class MedBot extends Robot {
    constructor (name, health, attack, heal){
        super(name, health, attack),
        this.heal = heal
    }
    repair(bot) {
        bot.health += this.heal         //this will make us input a bot's name will call up their specific helath and then add the heal function we have for this medbot 
    }
}

let healBot = new MedBot(`healBot`, 120, 10, 40)
console.log(healBot)
healBot.checkSelf() //this shows that the extended stuff has access to the initial set up 

tim.checkSelf()
healBot.repair(tim)
tim.checkSelf()


