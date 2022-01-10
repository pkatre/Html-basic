console.log("welcome to the practice");
let a = document;
//console.log(a);
/*a = document.body;
//console.log(a);
a = document.all;
//console.log(a);
a = document.forms[0];
//console.log(a);

// iterate all the element from html
Array.from(a).forEach(function (element) {
  console.log(element);
});
//console.log(element);
const str = "payal";
a = document.links[0].href.match(str); // matches the string with link
console.log(a);*/

//element selector
// Single element selector

let element = document.getElementById("myfirst");
//console.log(element);  select element
//element = element.className;
//console.log(element);  // get class name of selected element
//element = element.childNodes; // get child node of selected element
console.log(element);
//element = element.parentNode;// get parent node of selected element
//console.log(element);
//element.style.color = "red";  // selected element get colour red
//console.log(element);
//element.innerText = "payal is a good girl"; // add text into the selected element
//console.log(element);

//element.innerHTML = "<b>payal is a good girl</b>"; // apply HTMl style into the selected element
//console.log(element.innerText);  // it print inner text
//let sel = document.querySelector("#myfirst");
//sel = document.querySelector(".child"); // get first element of child class
//console.log(sel);
//sel = document.querySelector(".container"); // it select the whole container
//console.log(sel);

// select multiple element

/*let ele = document.getElementsByClassName("child"); // returns the HTML collection of object. this is the method
ele = document.getElementsByClassName("container");
//console.log(ele[0].getElementsByClassName("child")); // returns the first child element
ele = document.getElementsByTagName("div");
//console.log(ele);

Array.from(ele).forEach((element) => { // it iterate all the element of specified object
  console.log(element);
  element.style.color = "blue";
});*/
