const boxclick = document.querySelectorAll(".click");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div5 = document.getElementById("div5");
const div6 = document.getElementById("div6");
const div7 = document.getElementById("div7");
const div8 = document.getElementById("div8");
const div9 = document.getElementById("div9");

let count = 1;
boxclick.forEach((e) => {
  e.addEventListener("click", function () {
    console.log("click");

    if (count <= 9) {
      if (count % 2 !== 0) {
        e.innerHTML = "X";
      } else {
        e.innerHTML = "O";
      }
      count++;

      if (checkWin()) {
        alert("You won the game");
        clearAll();
      }
    } else {
      alert("Match draw");
      clearAll();
    }
  });
});
function clearAll() {
  for (var i = 1; i <= 9; i++) {
    document.getElementById("div" + i).innerHTML = "";
  }
}

function checkWin() {
  if (
    checkCondition(div1, div2, div3) ||
    checkCondition(div1, div5, div9) ||
    checkCondition(div1, div4, div7) ||
    checkCondition(div3, div6, div9) ||
    checkCondition(div7, div8, div9) ||
    checkCondition(div3, div5, div7) ||
    checkCondition(div2, div5, div8)
  ) {
    return true;
  }
}
function checkCondition(div1, div2, div3) {
  if (
    div1.innerHTML != "" &&
    div2.innerHTML != "" &&
    div3.innerHTML != "" &&
    div1.innerHTML === div2.innerHTML &&
    div2.innerHTML === div3.innerHTML
  ) {
    return true;
  }
}
