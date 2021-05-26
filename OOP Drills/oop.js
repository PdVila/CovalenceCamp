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
        console.log(`This car is made by ${this.manufacturer} and has ${this.wheels} wheels.`)
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, wheels, doors) {
        super(manufacturer, wheels);
        this.doors = doors;
    }
    aboutVehicle() {
        console.log(`This car is made by ${this.manufacturer} and has ${this.wheels} wheels. Doors: ${this.doors}`)
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, wheels, size, mpg){
        super(manufacturer,wheels);
            this.size = size;
            this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This ${this.size} car is made by ${this.manufacturer} and has ${this.wheels} wheels. It's great for it's ${this.mpg} mpg.`)
    }
}

class Motorcycles extends Vehicle {
    constructor(manufacturer, wheels, doors, handlebars){
        super(manufacturer,wheels)
            this.doors = doors;
            this.handlebars = handlebars;
    }
    aboutVehicle() {
        console.log(`This motorcycle is made by ${this.manufacturer} and has ${this.wheels} wheels. Doors: ${this.doors}, Handlebars: ${this.handlebars}`)
    }
}

let s1 = new Sedan('Toyota', 4, 'small', '25');
console.log(s1)
s1.aboutVehicle();

let m1 = new Motorcycles('Harley', 2, false, true);
console.log(m1);
m1.aboutVehicle();
