import { quizz } from "./utils/data.js";
import { newQuestionCard } from "./utils/card.js";
import { newAnswerCard } from "./utils/card.js";
import { addNewQuestion } from "./new-question.js";

switch (document.title) {
  case "Franks Next Quiz App":
    renderLandingPage();
    break;
  case "Franks Next Quiz App - Your Bookmarks":
    renderBookmarkPage();
    break;
  case "Franks Next Quiz App - New Form":
    renderAddQuestionPage();
    break;
  case "Franks Next Quiz App - Profile":
    break;
  default:
    renderLandingpage();
}

//console.log(document.title);

function renderAddQuestionPage() {
  console.log("AddQuestion");
  const myMain = document.querySelector("main");
  const cardFocus = 0;
  // *** Aufbau muss noch umgesetzt werden ***
  myMain.append(addNewQuestion());
}

function renderBookmarkPage() {
  console.log("Function Render Bookmar");
  const myMain = document.querySelector("main");
  const cardFocus = 0;
  // *** Aufbau muss noch umgesetzt werden ***
  myMain.append(newQuestionCard(quizz[cardFocus].frage, 3));
  myMain.append(newAnswerCard(quizz[cardFocus].antwort));
}

function renderLandingPage() {
  const myMain = document.querySelector("main");
  const cardFocus = 1;
  myMain.append(newQuestionCard(quizz[cardFocus].frage, 3));
  myMain.append(newAnswerCard(quizz[cardFocus].antwort));
}

// ---- Card Bookmark toogle Start ------
// const bookmarkButtonCard = document.querySelector(
//   '[data-js="bookmarkButtonCard"]'
// );
// const bookmarkButtonSvg = document.querySelector(
//   '[data-js="bookmarkButtonSvg"]'
// );

// bookmarkButtonCard.addEventListener("click", () => {
//   bookmarkButtonSvg.classList.toggle("bookmark__button__svg--marked");
// });
// ---- Card Bookmark toogle End ------

// eventListener Hide cardAnswerText

/*buttonHideAnswer.addEventListener("click", (event) => {
  //   console.log("yes");
  cardAnswerText.style.display = "none";
  buttonShowAnswer.style.display = "";
  buttonHideAnswer.style.display = "none";
});*/

// console.log(quizz[1].frage);

/*mal klären: 
const mytitel = document.head.title.textContent;
console.log(mytitel);*/
