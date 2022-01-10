console.log("this is script4");
/*let btn = document.getElementById("btn");
btn.addEventListener("click", func1);
btn.addEventListener("dblclick", func2);
btn.addEventListener("mousedown", func3);

function func1(e) {
  console.log("thanks", e);
  e.preventDefault(); // it prevent the default behaviour of button
}

function func2(e) {
  console.log("Thanks its double click", e);
  e.preventDefault();
}
function func3(e) {
  console.log("Thanks its mousedown", e);
  e.preventDefault();
}*/

/*document.querySelector(".no").addEventListener("mouseenter", function () {
  console.log("You enterd no"); // this click event represent the position of mouse on some element
});

document.querySelector(".no").addEventListener("mouseleave", function () {
  console.log("YTou leave the mouse");//this action represent the position of mouse when we exit
});*/

// change the background color of body dynamically
document
  .querySelector(".container")
  .addEventListener("mousemove", function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX}, ${e.offsetY},154)`;
    console.log("You triggerd mouse event"); //it gives mouse move event
  });
