// SELECT SINGLE ELEMENT//
// document.querySelector('div.first').style.backgroundColor = "blue";
// document.querySelector('p.first').style.backgroundColor = "green";
// document.querySelector('div#myID').style.backgroundColor = "red";

// document.querySelector('ul.second').style.backgroundColor = "yellow";
// document.querySelector('div#myID').style.backgroundColor = "red";
// document.querySelector('li.first').style.backgroundColor = "red";

// document.querySelector('span:nth-child(2)').style.backgroundColor = "pink";

// document.querySelector('li:nth-child(3)').style.backgroundColor = "red";
// document.querySelector('li:last-child').style.backgroundColor = "red";

//MULTIPLE ELEMENT SELECTION//-------------------------------------

// let eleList = document.getElementsByClassName('first'); //div.first, p.first, li.first
// eleList = document.getElementsByTagName('span'); //gives us 7 spans
// eleList = document.querySelectorAll('span'); //Returns a node list

// //getting All of Elelist
// for (let i = 0; i < eleList.length; i++) {
//     let el = eleList[i]
//     eleList[i].textContent = i + 1 + ' Updated';
//     console.log(el);
// }

// //Another way through forEach  ONLY USUABLE WITH querySelectorAll NODE LIST
// eleList.forEach(function(el,index) {
//     console.log(index) // 0,1,2,3,4,5,6 = 7
//     el.textContent = `${index} : updated`
//     el.style.color = 'green';
// })

// ELEMENT MANIPULATION // ----------------------------------------
// innerContent, getAttribute, setAttribute, update styles attribute
const el1 = document.querySelector("h1");
