console.log("hello");
const container = document.getElementById("container");
const input = document.querySelector(".inputText");
const addtext = document.querySelector(".add_button");

addtext.addEventListener("click", function () {
  console.log("hello");
  //create element
  if (input.value.trim()) {
    const ul = document.createElement("ul");
    ul.classList.add("to-doBox");
    //console.log(ul);

    const todolist = document.createElement("div");
    todolist.classList.add("todolist");
    //console.log(todolist);

    //li element gto get input value
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

    console.log(ul);

    //append all the element into main div
    container.appendChild(ul);
    console.log(ul);

    //edit button work
    editButton.addEventListener("click", function () {
      li.innerText = parentNode.insertBefore(newNode, referenceNode);
    });

    //remove button work
    buttonRemove.addEventListener("click", function (e) {
      todolist.remove("todolist");
    });

    //when the add button click it clear the input text
    input.value = "";
  }
  //remove button work
});
