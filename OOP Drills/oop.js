// Creating 5 Object literals with a name property and sayHello function
// let person1 = {
//     name: 'Peter',
//     sayHello: function() {
//         console.log(`Hello my name ${this.name}`);
//     }
// }

// let person2 = {
//     name: 'John',
//     sayHello: function() {
//         console.log(`Hello my name ${this.name}`);
//     }
// }

// let person3 = {
//     name: 'Suzy',
//     ssayHello: function() {
//         console.log(`Hello my name ${this.name}`);
//     }
// }

// let person4 = {
//     name: 'Lee',
//     sayHello: function() {
//         console.log(`Hello my name ${this.name}`);
//     }
// }

// let person5 = {
//     name: 'Tim',
//     sayHello: function() {
//         console.log(`Hello my name ${this.name}`);
//     }
// }

//Pseudo Classes, create a constructor function takign in name,city,age

// function Pseudo(name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }

// Pseudo.prototype.personInfo = function() {
//     console.log(`Hey! My name is ${this.name} and I am ${this.age} years old and I live in ${this.city}.`)
// }

// let p1 = new Pseudo('Peter','Duarte', 22);
// p1.personInfo();

// Now in ES6 Language, using constructyor function and class
// Methods do not need to be prototypes now!

// class Person {
//     constructor(name, city, age) {
//         this.name = name;
//         this.city = city;
//         this.age = age;
//     }
//     sayHello() {
//         alert(`Hey! My name is ${this.name} and ${this.age} years old and I am from ${this.city}.`);
//     }
// }

// let p1 = new Person('Jane', 'Duarte', 22);
// p1.sayHello();

// Inheritance
class Vehicle {
    constructor(manufacturer, wheels) {
        this.manufacturer = manufacturer;
        this.wheels = wheels;

    }
    aboutVehicle() {
        console.log(`The car is a hatchback from ${this.manufacturer} with ${this.wheels}.`)
    }
}


class Trucks extends Vehicle {
    constructor(manufacturer, wheels, doors) {
        super(manufacturer, wheels);
    }
    doors () {
        console.log('There is a door')
    }
}


// class Sedan extends Vehicle {
//     size: 
//     mpg;
// }

// class Motorcycles extends Vehicle {
//     handles: true;
//     door = false;
// }


