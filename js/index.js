//  ----- New Form -----
const newForm = document.querySelector('[data-js="newForm"]');
const newMain = document.querySelector("main");
console.log(newMain);
newForm.newQuestion.value = "";
newForm.newAnswer.value = "";
newForm.inputTag.value = "";

newForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("yes");

  // const newQuestion = newForm.newQuestion.value;
  // const newAnswer = newForm.newAnswer.value;
  // const newTag = newForm.inputTag.value;

  //console.log(`Frage: ${newQuestion} Antwort: ${newAnswer} Tag: ${newTag}`);

  const newCard = document.createElement("article");
  newCard.classList.add("card");
  // console.log(newCard);
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

// --- init hide answer / show Button ---
const buttonHideAnswer = document.querySelector('[data-js="buttonHideAnswer"]');
const buttonShowAnswer = document.querySelector('[data-js="buttonShowAnswer"]');
const cardAnswerText = document.querySelector('[data-js="cardAnswerText"]');

// buttonHideAnswer.style.display = "none";
// cardAnswerText.style.display = "none";

// eventlistener Show Answer

buttonShowAnswer.addEventListener("click", (event) => {
  //   console.log("yes");
  buttonShowAnswer.style.display = "none";
  cardAnswerText.style.display = "";
  buttonHideAnswer.style.display = "";
});

// eventListener Hide cardAnswerText

buttonHideAnswer.addEventListener("click", (event) => {
  //   console.log("yes");
  cardAnswerText.style.display = "none";
  buttonShowAnswer.style.display = "";
  buttonHideAnswer.style.display = "none";
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
