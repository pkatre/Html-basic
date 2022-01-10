//Creating, Removing and repalcing elemnent

console.log("welcome to script 2 js");
let ele = document.createElement("li");
//console.log(ele); // it create a blank li element

let text = document.createTextNode("I am a text node"); // instead of using innerText and innerHTML property directly used this
ele.appendChild(text);

// Add a class name to the li element
ele.className = "jinap"; // it sets the class name for li element
ele.id = "myjadu"; // it sets the id name for li element
ele.setAttribute("title", "mytitle"); // it sets the attribute titlt=mytitle to the li element
//ele.innerText = "Hello this is payal"; // Add text to the li element
//ele.innerHTML = "<b>hello this is payal</b>"; // it bold the hello this is payal. give HTML to the text

//append this li element to the child element of ul

let ul = document.querySelector("ul.this");
ul.appendChild(ele);
console.log(ele); // output is- new memeber added to the li element -hello this is payal

//REPLACE ELEMENT

let ele2 = document.createElement("h3");
ele2.id = "ele2";
ele2.className = "finap";
let text2 = document.createTextNode("I am a text node 2");
ele2.appendChild(text2);
ele.replaceWith(ele2); // Replace ele to ele2
let myul = document.getElementById("myul");
myul.replaceChild(ele, document.getElementById("fui"));
myul.removeChild(document.getElementById("lui")); // it remove last li text

//check id and class of element

//let pr = ele2.getAttribute("class");
//console.log(ele2, pr); // this gives the class and id name of perticular element

let pr = ele2.hasAttribute("class"); // it will return true or false. check the class present or not
console.log(ele2, pr);
ele2.setAttribute("title", "mynew"); // this set the title element to the ele2
console.log(ele2, pr);

let ele3 = document.createElement("h4");
let text3 = document.createTextNode("Go to code with harry");
ele3.appendChild(text3);
ele3.setAttribute("href", "http://www.codewithharry.com");
console.log(ele3);
let myheading = document.getElementById("new");
myheading.replaceWith(ele3, document.getElementById("ninja"));
