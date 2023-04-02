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

function renderAddQuestionPage() {
  console.log("AddQuestion");
  const myMain = document.querySelector("main");
  const cardFocus = 0;
  myMain.append(addNewQuestion());
}

function renderBookmarkPage() {
  console.log("Function Render Bookmar");
  const myMain = document.querySelector("main");
  const cardFocus = 0;
  myMain.append(newQuestionCard(quizz[cardFocus].frage, 3));
  myMain.append(newAnswerCard(quizz[cardFocus].antwort));
}

function renderLandingPage() {
  const myMain = document.querySelector("main");
  const cardFocus = 1;
  myMain.append(newQuestionCard(quizz[cardFocus].frage, 3));
  myMain.append(newAnswerCard(quizz[cardFocus].antwort));
}
