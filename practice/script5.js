//Local and session storage

//Add a key value inside local storage
console.log("welcome to script 5 ");
let impArray = ["payal", "komal", "manisha"];

localStorage.setItem("Name", "Harry");
localStorage.setItem("Name2", "rohan");
localStorage.setItem("sabzi", JSON.stringify(impArray)); // it convert  a array into string
let name = localStorage.getItem("Name");
let name2 = JSON.parse(localStorage.getItem("sabzi")); // it give output in the form of array
console.log(name2);

//Clear the entire local storage
//localStorage.clear(); //remove both Harry and rohan

//Clear a perticular key value pair
localStorage.removeItem("Name2"); //remove rohan
console.log(name); // get the name harry

sessionStorage.setItem("Name", "Harry");
sessionStorage.setItem("Name2", "rohan");

/*let no = 5;
let fact = 1;
while (no > 0) {
  fact *= no;
  no--;
}*/
//console.log(fact);

//REVERESE NUMBER
/*let no = 1234;
let rev = 0;
let sum = 0;
while (no > 0) {
  rev = rev * 10 + parseInt(no % 10);

  no = parseInt(no / 10);
}
console.log(rev);*/

//find some of digit
/*let num = 1234;
let sum = 0;
while (num > 0) {
  let rev = num % 10;
  sum = sum + rev;
  num = parseInt(num / 10);
}
console.log(sum);*/

//find some of 1st 10 num
/*let sum = 0;
b for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);*/

//find smallest element from an array

const arr = [10, 4, 7, 2, 1, 0];
let temp;
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr[0]);

//fibonacci sereies
let a = 0;
let b = 1;
let c;
console.log(a + " " + b);
for (let i = 1; i < 10; i++) {
  c = a + b;
  console.log(c);
  a = b;
  b = c;
}

//program to reverse string
const str = "payal";
let strrev = "";
for (let i = str.length - 1; i >= 0; i--) {
  strrev = strrev + str.charAt(i);
}
console.log(strrev);

//program to print pattern
function factorial(n) {
  var fact = 1;
  while (n > 0) {
    fact *= n;
    n--;
  }
  return fact;
}
console.log(factorial(5));
//rev the number
let no = 1234;
let rev = 0;
while (no > 0) {
  rev = rev * 10 + parseInt(no % 10);
  no = parseInt(no / 10);
}
console.log(rev);

//==================string==================
const str1 = "this is a string";
console.log(str1.slice(0, 4)); // this
console.log(str1.indexOf("is")); //is index-2 this will give index of 1st occurance
const substr = str1.slice(1, 7);
console.log(substr.slice(1, 4)); // is

//Destructuring an aaray

const [ca, bc] = [34, 564];
console.log(ca, bc); // 34 564

const fruits = ["Apple", "banana", "mongoes"];
[a, b, c] = fruits;
console.log(a, b, c);

//Object destructuring
const laptop = {
  model: "hp",
  age: "23 days",
  company: "apple",
  start: function () {
    console.log("laptop is started");
  },
};
const { model, age, company } = laptop;
console.log(model, age, company);

//==================MAP=====================

const myMap = new Map();
console.log(myMap);
//setting the value into map

const key1 = "mystr",
  key2 = {},
  key3 = function () {};
myMap.set(key1, "this is a string");
myMap.set(key2, "this is a blank obj");
myMap.set(key3, "this is a blank function");
//console.log(myMap);
//=================or=================
myMap.set("name", "payal");
console.log(myMap);

//getting the value from a map
const value = myMap.get(key1);
console.log(value); // this is a string
console.log(myMap.size);

//you can loop using for of loop
/*for (const newmap of myMap) {
  console.log(newmap);
}*/

for (const [key, value] of myMap) {
  console.log(key, value);
}

// getting only keys
for (let keys of myMap.keys()) {
  console.log(keys);
}
//getting only values
for (let values of myMap.values()) {
  console.log(values);
}

//you can iterate using forEach
myMap.forEach((value, key) => {
  console.log(value, key);
});

//converting map to an array
let arr1 = Array.from(myMap);
console.log(arr1);

//converting map keys to an aaray
let arr2 = Array.from(myMap.keys());
console.log(arr2);

//convereting map values to an aaray
let arr3 = Array.from(myMap.values());
console.log(arr3);

//=================set=========================

const myset = new Set();
myset.add("is");
myset.add("is");
myset.add("set");
myset.add(56);
myset.add(true);
myset.add(false);
console.log(myset); //{is, set}

/*const myset2 = new Set([34, 12, "this", true, { a: 33, b: 56 }]);
console.log(myset2);*/

console.log(myset.has(56));

//iterate set
for (const item of myset) {
  console.log(item);
}

//by using foreach

myset.forEach((item1) => {
  console.log(item1);
});

//convert set into an array

const arr4 = Array.from(myset);
console.log(arr4);
