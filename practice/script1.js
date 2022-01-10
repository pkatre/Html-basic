// Selecting and traversing an element

console.log("welcome to selector tutorial");
let ele = document.querySelector(".no"); // select 1st element of specified class
//console.log(ele);
ele = document.querySelector(".container");
let nodeName = ele.childNodes[5].nodeName; //get node name(string) of specified index
let nodeType = ele.childNodes[1].nodeType;
console.log(nodeName);
console.log(nodeType); // get type of node that is comment, heading,p,element,attribute,document

//console.log(ele.childNodes); // returns the children(nodelist)i.e text inside the attribute
//console.log(ele.children); // returns the child elements attributes , class, id,form

let container = document.querySelector(".container");
console.log(container.children[0].children[1].children); //find child element. traversing element
//output getting li tag

console.log(container.firstChild); // get first child  of container that is text
// it is used to get what is inside child element

console.log(container.firstElementChild); // get first child element that is div 1st

console.log(container.lastChild); // get last child of container that is text
console.log(container.lastElementChild); // get last child element of container that is link
console.log(container.childNodes); // get node list(15) that is text,comment,div etc.
console.log(container.childElementCount); // get element list(6) that is how many element inside nodelist that is div,li,form etc
console.log(container.children);

console.log(container.firstElementChild.parentNode); // output is container. get the parent of 1st child element
console.log(container.firstElementChild.nextSibling); // output is text
console.log(container.firstElementChild.nextElementSibling); // output is div
