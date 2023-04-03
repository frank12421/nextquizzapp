import { quizz } from "./data.js";
import { changeBookmarkStatus } from "./bookmark.js";

export function cardContainer() {
  const cardSection = document.createElement("sektion");
  cardSection.classList.add("card__box");
  return cardSection;
}

export function newQuestionCard(cardFocus, countTags) {
  const cardSection = cardContainer();
  const cardText = document.createElement("article");
  cardText.classList.add("card__text");
  console.log(`NewQuestionCard-Focus= ${cardFocus}`);
  cardText.textContent = quizz[cardFocus].frage;
  //const countTags = 3;
  cardSection.append(cardText);
  cardSection.append(addQuestionCardFooter(cardFocus, countTags));
  return cardSection;
}

function addQuestionCardFooter(cardFocus, countTags) {
  // baut den Footer in eine Fragekarte auf.
  const footerSection = document.createElement("section");
  footerSection.classList.add("question__card__footer");
  footerSection.append(addListTags(cardFocus));
  footerSection.append(addBookmarkButton(cardFocus));
  return footerSection;
}

function addBookmarkButton(cardFocus) {
  const myBookmarkButton = document.createElement("button");
  myBookmarkButton.type = "button";
  myBookmarkButton.classList.add("xButton__bookmark__card");

  myBookmarkButton.addEventListener("click", (event) => {
    //--- Hier den Bookmark-Status ändern ----
    console.log("Click Button Bookmark in Question");
    console.log(cardFocus);
    changeBookmarkStatus(cardFocus);
  });
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute(
    "data-js",
    "button_bookmark_question" + cardFocus.toString()
  );
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.classList.add("my__svg");
  const myPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  myPath.setAttribute(
    "d",
    "M17 3C18.1046 3 19 3.89543 19 5L19 19.0536C19 20.5893 17.341 21.552 16.0077 20.7901L12.9923 19.067C12.3774 18.7157 11.6226 18.7157 11.0077 19.067L7.99228 20.7901C6.65897 21.552 5 20.5893 5 19.0536L5 5C5 3.89543 5.89543 3 7 3L17 3Z"
  );
  svg.appendChild(myPath);
  if (quizz[cardFocus].bookmark === true) {
    svg.classList.add("svg__fill__full");
  }
  myBookmarkButton.append(svg);
  return myBookmarkButton;
}

function addListTags(cardFocus) {
  const myUl = document.createElement("ul");
  for (let x = 0; x < quizz[cardFocus].tag.length; x++) {
    const myLi = document.createElement("li");
    myLi.classList.add("question__card__footer__tag");
    // - Tags müssen noch zu Button werden
    myLi.textContent = `#-${quizz[cardFocus].tag[x]}`;
    myUl.append(myLi);
  }
  return myUl;
}

export function newAnswerCard(cardFocus) {
  // erstellt eine neue Antwort-Karte
  // bekommt den Text zugewiesen. Erhält einen Button zu anzeigen/verstecken
  const cardSection = cardContainer();
  cardSection.setAttribute("data-js", "answerCardSection");
  cardSection.append(answerContent(quizz[cardFocus].antwort));
  cardSection.append(newAnswerButton());
  return cardSection;
}

function answerContent(text) {
  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("data-js", "answerContent");
  cardDiv.classList.add("answer__content");
  const cardContent = document.createElement("article");
  const cardAnswerHideButton = document.createElement("button");
  cardContent.classList.add("card__text");
  cardContent.textContent = text;
  cardDiv.append(cardContent);
  cardAnswerHideButton.textContent = "Hide Answer";
  cardAnswerHideButton.classList.add("answercard__button__hide");
  cardAnswerHideButton.addEventListener("click", (event) => {
    const hideAnswer = document.querySelector(`[data-js="answerContent"]`);
    const showButton = document.querySelector(`[data-js="answerButton"]`);
    hideAnswer.style.display = "none";
    showButton.style.display = "";
  });
  cardDiv.append(cardAnswerHideButton);
  return cardDiv;
}

function newAnswerButton() {
  const contentAnswerButton = document.createElement("button");
  contentAnswerButton.type = "button";
  contentAnswerButton.setAttribute("data-js", "answerButton");
  contentAnswerButton.textContent = "Show Answer";
  contentAnswerButton.classList.add("button__show__answer");
  contentAnswerButton.addEventListener("click", (event) => {
    console.log("click");
    const showAnswer = document.querySelector(`[data-js="answerContent"]`);
    const hideAnswerButton = document.querySelector(`[data-js="answerButton"]`);
    showAnswer.style.display = "flex";
    hideAnswerButton.style.display = "none";
  });
  return contentAnswerButton;
}
