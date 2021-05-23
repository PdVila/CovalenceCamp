// //Template Literals and Default Parameters
// //1) Declare a new function named favMovie with 1 parameter
// function favMovie(movie = "The Room", name = "Tommy Wiseau") {
//     console.log(`My name is ${name} and my favorite movie is ${movie}`) //2
// }
// //3 Calling without argument
// favMovie(); //Results in undefined 4 //6 now results in THE ROOM
// //5 Calling with an argument and added a default parameter = "The Room"
// favMovie("Avengers: EndGame") //7 Defined parameters
// //8 Updated console.log add in name
// favMovie("Avengers: EndGame", "Peter") //9Now includes my name argument
// //10 Calling function without any parameters
// favMovie(); //Uses both default parameters

// ARROW FUNCTIONS
//1) favMovie into arrow functiow 
let favMovie = (movie = "The Room", name = "Tommy Wiseau") => {
    console.log(`My name is ${name} and my favorite movie is ${movie}`);

}

favMovie(); //2) Call the function 3) Message still in console

//4 Concise body syntax on the same line
let favSeries = series => console.log(`My favorite series is ${series}`)

// favSeries(); //Undefined
favSeries("AOT");

//5 - 9
let getFirstName = (name) => {
    let newName = name.split(' ') //Splits by name
    console.log(newName[0]); //Without the brackets, it'll be Peter, Vila
}
getFirstName('Peter Vila')

//Concise version! Hella confusing but save space
let getFirstNameConcise = name => name.split(' ')[0];
console.log(getFirstNameConcise('Peter Vila Jr'));

//10) new function named doMath with 2 parameters and return an object literal

function doMath(x,y) {

    let exponent = x ** y; //Exponent = 125
    let multiply = x * y; // Multiply = 15
    return {
        exponent,
        multiply,
    }
}

let solvedMath = doMath(5,3);
console.log(solvedMath)
console.log(`${solvedMath.exponent} and ${solvedMath.multiply}`) // 125 


//SPREAD
//1) Function with 3 paramters
function spreadPractice(name,location,favFood){
    console.log(`My name is ${name} and I am from ${location} and my favorite food is ${favFood}`)
}

spreadPractice('Peter','Duarte','Pizza')

//2) Array with 3 values
let arr = ["Paul", "Birmingham", "Kimchi"];
//3) Use spread operators to use these values into the function
spreadPractice(...arr); //My name is Paul and I am from Birmingham and my favorite food is Kimchi

let myName = "Peter Vila Jr."
function numberFive(arg) {
    let newString = arg.split(' ')
    for (let i = 0; i < newString.length; i++) {
        console.log(newString[i])
    }
}

numberFive(myName);