console.log("welcome to script 3");
document.getElementById("heading").addEventListener("click", function (e) {
  let variable;
  console.log("you have clicked the heading");
  //location.href = "//codewithharry.com"; this line get a new webpage
  variable = e.target; // it gives the targeted element
  variable = e.target.className; // it gives the class name of targeted heading.
  //variable = e.target.id; // it gives the id of targeted element
  variable = Array.from(e.target.classList); // it gives all the attributes(classname) oftargeted element
  variable = e.offsetX;
  variable = e.offsetY;
  variable = e.clientX;
  variable = e.clientY;

  console.log(variable);
});
