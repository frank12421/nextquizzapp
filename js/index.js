import { quizz } from "./utils/data.js";
import { newQuestionCard } from "./utils/card.js";
import { newAnswerCard } from "./utils/card.js";
import { addNewQuestion } from "./new-question.js";

const cardFocus = 0;

switch (document.title) {
  case "Franks Next Quiz App":
    renderLandingPage(cardFocus);
    break;
  case "Franks Next Quiz App - Your Bookmarks":
    renderBookmarkPage(cardFocus);
    break;
  case "Franks Next Quiz App - New Form":
    renderAddQuestionPage(cardFocus);
    break;
  case "Franks Next Quiz App - Profile":
    break;
  default:
    renderLandingpage();
}

function renderLandingPage(cardFocus) {
  const myMain = document.querySelector("main");
  myMain.append(newQuestionCard(cardFocus, 3));
  myMain.append(newAnswerCard(cardFocus));
}

function renderBookmarkPage() {
  console.log("Function Render Bookmar");
  const myMain = document.querySelector("main");
  myMain.append(newQuestionCard(quizz[cardFocus].frage, 3));
  myMain.append(newAnswerCard(quizz[cardFocus].antwort));
}

function renderAddQuestionPage(cardFocus) {
  //console.log("AddQuestion");
  const myMain = document.querySelector("main");
  myMain.append(addNewQuestion(cardFocus));
}
