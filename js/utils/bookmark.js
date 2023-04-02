import { quizz } from "./data.js";

export function changeBookmarkStatus(cardFocus) {
  // console.log(quizz[cardFocus]);
  const myvar = document.querySelector(`[data-js="button_bookmark_question"]`);

  if (quizz[cardFocus].bookmark) {
    quizz[cardFocus].bookmark = false;
    myvar.classList.remove("svg__fill__full");
  } else {
    quizz[cardFocus].bookmark = true;
    myvar.classList.add("svg__fill__full");
  }
  //  console.log(quizz[cardFocus]);
}
