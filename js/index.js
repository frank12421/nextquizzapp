import { quizz } from "./utils/data.js";
import { cardContainer } from "./utils/card.js";
import { newQuestionCard } from "./utils/card.js";
import { newAnswerCard } from "./utils/card.js";

switch (document.title) {
  case "Franks Next Quiz App":
    renderLandingpage();
    console.log("Landingpage");
    break;
  case "Franks Next Quiz App - Your Bookmarks":
    console.log("Bookmark");
    break;
  case "Franks Next Quiz App - New Form":
    console.log("New Form");
    break;
  case "Franks Next Quiz App - Profile":
    console.log("Profile");
    break;
  default:
    renderLandingpage();
    console.log("default");
}

console.log(document.title);

function renderLandingpage() {
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

/*  ----- New Form -----
const newForm = document.querySelector('[data-js="newForm"]');
const newMain = document.querySelector("main");
//console.log(newForm);

newForm.newQuestion.value = "";
newForm.newAnswer.value = "";
newForm.inputTag.value = "";

const charQuestion = document.querySelector('[data-js="charQuestion"]');
const charAnswer = document.querySelector('[data-js="charAnswer"]');

newForm.newQuestion.addEventListener("input", (event) => {
  const charcounter =
    150 - Number(event.target.value.length) + "  character left";
  charQuestion.textContent = charcounter;
});

newForm.newAnswer.addEventListener("input", (event) => {
  const charcounter =
    150 - Number(event.target.value.length) + "  character left";
  charAnswer.textContent = charcounter;
});

newForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCard = document.createElement("article");
  newCard.classList.add("card");
  const newQuestion = document.createElement("p");
  newQuestion.classList.add("card__question");
  newQuestion.textContent = newForm.newQuestion.value;

  const newAnswer = document.createElement("p");
  newAnswer.classList.add("card__answer");
  newAnswer.textContent = newForm.newAnswer.value;

  const newTag = document.createElement("p");
  newTag.textContent = newForm.inputTag.value;

  newCard.append(newQuestion);
  newCard.append(newAnswer);
  newCard.append(newTag);
  newMain.append(newCard);
});

//  ----- Ende New Form ----- */
