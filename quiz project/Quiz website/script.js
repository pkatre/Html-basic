const quiz = [
  {
    question: "Q1: what is CSS?",
    a: "Cascading style sheet",
    b: "Cascading super sheet",
    c: "Cascading color style",
    d: "Cascading color sheet",
    ans: "ans1",
  },
  {
    question: "Q2: What is HTML?",
    a: "Hypertext Markup Language",
    b: "Hypertext Makeup Language",
    c: "Hypertext transfer Language",
    d: "Hypertext Money language",
    ans: "ans1",
  },
  {
    question: "Q3: What is HTTP?",
    a: "Hypertext transfer product",
    b: "Hey test transfer protocol",
    c: "Hypertext transfer protocol",
    d: "Hypertext Trans product",
  },
];

const innerdiv = document.querySelectorAll(".inner-div");
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#score");
const timer = document.querySelector(".timers");

let questionCount = 0;
let score = 0;
const loadQuestion = function () {
  const questionList = quiz[questionCount];
  question.innerHTML = questionList.question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};
loadQuestion();

//to check which option is selected
const getCheckAnswer = function () {
  let answer;
  answers.forEach((curAns) => {
    if (curAns.checked) {
      answer = curAns.id;
    }
  });
  return answer;
};

//to uncheked radio button
const deselectAll = () => {
  answers.forEach((curAns) => (curAns.checked = false));
};
submit.addEventListener("click", () => {
  const checkAnswer = getCheckAnswer();
  console.log(checkAnswer);
  if (checkAnswer === quiz[questionCount].ans) {
    score++;
  }

  questionCount++;
  deselectAll();
  if (questionCount < quiz.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `<h2>you scored ${score}/${quiz.length}</h2>
      <button class="btn" onclick="location.reload()">Play Again </button>`;

    showScore.classList.remove("show-score");
  }
});

const logoutTimer = function () {
  let time = 20;
  //call the timer every second

  const timer1 = setInterval(function () {
    const min = String(Math.trunc(time / 60)).padStart(2, "0");
    const sec = String(Math.trunc(time % 60)).padStart(2, "0");
    timer.textContent = `${min}: ${sec}`;
    //Decrease 1s
    time--;

    //When 0 seconds timer stop and test finish

    if (time === 0) {
      clearInterval(timer1);
      innerdiv.forEach((ele) => (ele.innerHTML = ""));

      innerdiv.forEach(
        (ele2) =>
          (ele2.innerHTML = showScore.innerHTML =
            `<h2>OOPS...! Time Out.</br> you scored ${score}/${quiz.length}</h2>
      <button class="btn" onclick="location.reload()">Play Again </button>`)
      );
    }
  }, 1000);
};
logoutTimer();
