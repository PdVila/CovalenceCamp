'use strict'

const myName = 'Peter';
// Constant expression for my first name. This is a string
const totalUnitedStates = 50;
//Const that is a number
let sumTotal = 5 + 4;
// The total of this variable will be a number, which equals 9 if I log it

function sayHello() {
    alert('Hello World!')
}

sayHello(); //Calls the function. Since it is an alert, it will popup

function checkAge(name, age) {
    if (age < 21) {
        alert(`Sorry ${name}, you aren't old enough to view this page!`)
    } 
}

checkAge('Charles',21);
checkAge('Abby', 21);
checkAge('James', 18);
checkAge('John', 17);

const favoriteVegetables = ['corn','broccoli', 'potato', 'green beans'];

for (let i = 0; i < favoriteVegetables.length; i++) {
    console.log(favoriteVegetables[i])
}

const pet = {
    name: 'Teddy',
    breed: 'Pomeranian'
}

console.log(Object.keys(pet))
console.log(Object.values(pet))
console.log(pet)

let fivePeople = [
    {
        'name': 'John',
        'age': 15,
    },
    {
        'name': 'Jodi',
        'age': 14,
    },
    {
        'name': 'Lily',
        'age':29
    },
    {
        'name': 'Micheal',
        'age':23
    },
    {
        'name': 'Scarra',
        'age':31
    }
]

for (const [key, value] of Object.entries(fivePeople)) {
  console.log(key, value);
}

// This for loop grabs the checkAge function from above, using our iteration through fivePeople
for (let i = 0; i < fivePeople.length; i++) {
    checkAge(fivePeople[i].name,fivePeople[i].age)
}

function getLength(letter) {
    return letter.length;
}

let testWord = getLength('Hello World!') 
console.log(testWord) //this returns 12

if (testWord % 2 === 0) {
    console.log('The world is nice and even!') //Since 12, this will work
} else {
    console.log('The world is an odd place!')
} 