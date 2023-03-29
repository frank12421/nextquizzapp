const quizz = [
  {
    frage: "Was ist die antwort auf das Universum  und alles andere?",
    antwort: "42",
    bookmark: false,
    tag: ["all", "html", "css"],
  },
  {
    frage:
      "Diese Frage ist eigentlich keine wirkliche Frage, sondern lediglich ein Text der die vollen 150 Zeichen ausnutzt und dann ohne Frage einfach unvollend",
    antwort:
      "Und hier folgt die Antwort - ebenfalls nicht zu kurz, nicht zu lang - damit sie gut zu merken ist.",
    bookmark: true,
    tag: ["max", "html", "css"],
  },
];
const myMain = document.querySelector("main");
const cardFocus = 1;

myMain.append(newQuestionCard(quizz[1].frage));

function newQuestionCard(text) {
  // erstellt eine neue Fragen-Karte
  // bekommt den Text zugewiesen - übergibt die Anzahl der Tags an die Footer Function
  const cardSection = document.createElement("sektion");
  cardSection.classList.add("card__box");
  const cardText = document.createElement("article");
  cardText.classList.add("card__text");
  cardText.textContent = text;
  const countTags = 3;
  cardSection.append(cardText);
  cardSection.append(addCardFooterQuestion(countTags));
  return cardSection;
}

function addCardFooterQuestion(countTags) {
  // baut den Footer in eine Fragekarte ein.
  const footerSection = document.createElement("section");
  footerSection.classList.add("new__card__footer");
  const myUl = document.createElement("ul");
  for (let x = 1; x <= countTags; x++) {
    const myLi = document.createElement("li");
    myLi.classList.add("new__card__footer__tag");
    // - Tags müssen noch zu Button werden
    myLi.textContent = `Tag-${x}`;
    myUl.append(myLi);
  }
  footerSection.append(myUl);
  const myBookmarkButton = document.createElement("button");
  myBookmarkButton.textContent = "Test";
  //button.createElement("svg");
  /*myBookmarkButton.setAttribute(
  "path",
    (d =
      "M17 3C18.1046 3 19 3.89543 19 5L19 19.0536C19 20.5893 17.341 21.552 16.0077 20.7901L12.9923 19.067C12.3774 18.7157 11.6226 18.7157 11.0077 19.067L7.99228 20.7901C6.65897 21.552 5 20.5893 5 19.0536L5 5C5 3.89543 5.89543 3 7 3L17 3Z");*/
  footerSection.append(myBookmarkButton);
  return footerSection;
}

function addCardFooterAnswer(theEnd) {
  console.log(`Function addCardFooterAnswer: ${theEnd}`);
  const mySection = document.createElement("section");
  const myAnswerHideButton = document.createElement("button");
  myAnswerHideButton.textContent = "Answer Hide";
  mySection.classList.add("new__card__footer");
  mySection.append(myAnswerHideButton);
  return mySection;
}

// --- init hide answer / show Button ---
const buttonHideAnswer = document.querySelector('[data-js="buttonHideAnswer"]');
const buttonShowAnswer = document.querySelector('[data-js="buttonShowAnswer"]');
const cardAnswer = document.querySelector('[data-js="cardAnswer"]');

// ---- eventlistener Show Answer ----

buttonShowAnswer.addEventListener("click", (event) => {
  //console.log("yes");
  const myAnswerSection = document.createElement("sektion");
  const myAnswerText = document.createElement("p");
  const myButton = document.createElement("button");
  myAnswerSection.setAttribute("data-js", "answerSection");
  myAnswerSection.classList.add("globalcontainer", "cardContainer");
  myAnswerText.classList.add("cardContainer");
  myAnswerText.textContent = quizz[cardFocus].antwort;

  myButton.type = "button";
  myButton.textContent = "Hide Answer";
  myButton.classList.add("button__hide__answer");
  myButton.addEventListener("click", (event) => {
    myAnswerSection.remove();
    buttonShowAnswer.style.display = "";
  });

  myAnswerSection.append(myAnswerText, myButton);
  cardAnswer.append(myAnswerSection);
  buttonShowAnswer.style.display = "none";
});

// ---- Card Bookmark toogle Start ------
const bookmarkButtonCard = document.querySelector(
  '[data-js="bookmarkButtonCard"]'
);
const bookmarkButtonSvg = document.querySelector(
  '[data-js="bookmarkButtonSvg"]'
);

bookmarkButtonCard.addEventListener("click", () => {
  bookmarkButtonSvg.classList.toggle("bookmark__button__svg--marked");
});
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
