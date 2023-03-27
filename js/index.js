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
    bookmark: false,
    tag: ["max", "html", "css"],
  },
];
const cardFocus = 1;

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
