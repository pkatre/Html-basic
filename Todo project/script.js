console.log("hello");
const container = document.getElementById("container");
const input = document.querySelector(".inputText");
const addtext = document.querySelector(".add_button");
const date = document.querySelector(".date");

setInterval(function () {
  const now = new Date();
  const day = now.getDay();
  const date1 = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const hour = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const sec = String(now.getSeconds()).padStart(2, "0");
  date.innerHTML = `Date:${date1}/${month}/${year}, ${hour}:${min}`;
}, 1000);
var ul;
var removeAlldiv;
addtext.addEventListener("click", function () {
  console.log("hello");
  //create element
  if (input.value.trim()) {
    ul = document.createElement("ul");
    ul.classList.add("to-doBox");
    //console.log(ul);

    const todolist = document.createElement("div");
    todolist.classList.add("todolist");
    //console.log(todolist);

    //li element get input value
    const li = document.createElement("li");
    li.innerHTML = input.value;
    li.classList.add("todo-text");

    //console.log(li);

    //button div
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("remove-edit-button");

    //remove button
    const buttonRemove = document.createElement("button");
    buttonRemove.classList.add("remove-button");
    buttonRemove.innerHTML = "Remove";
    console.log(buttonRemove);

    //edit button
    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.innerHTML = "Edit";

    //append element

    ul.appendChild(todolist);
    todolist.appendChild(li);
    todolist.appendChild(buttonDiv);
    buttonDiv.appendChild(buttonRemove);
    buttonDiv.appendChild(editButton);

    //append all the element into main div
    container.appendChild(ul);
    console.log(ul);

    //edit button work
    editButton.addEventListener("click", function () {
      console.log("click");

      input.value = li.innerHTML;
      todolist.remove("todolist");
      li.innerHTML = input.value;
      li.classList.add("todo-text");
    });

    //remove button work
    buttonRemove.addEventListener("click", function (e) {
      todolist.remove("todolist");
    });

    //removeallButton.classList.add("removeAll-button");

    //when the add button click it clear the input text
    input.value = "";
  }

  //remove button work
  container.appendChild(removeAlldiv);
});

//Remove all button
removeAlldiv = document.createElement("div");
removeAlldiv.classList.add("removeall_Button");
const removeallButton = document.createElement("button");
removeallButton.classList.add("removeAll-button");
removeallButton.innerHTML = "RemoveAll";

console.log(removeallButton);

removeAlldiv.appendChild(removeallButton);
removeAlldiv.addEventListener("click", function () {
  ul.remove();
});
