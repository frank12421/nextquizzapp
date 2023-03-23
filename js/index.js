// --- init hide answer / show Button ---
const buttonHideAnswer = document.querySelector('[data-js="buttonHideAnswer"]');
const buttonShowAnswer = document.querySelector('[data-js="buttonShowAnswer"]');
const cardAnswerText = document.querySelector('[data-js="cardAnswerText"]');

buttonHideAnswer.style.display = "none";
cardAnswerText.style.display = "none";

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
