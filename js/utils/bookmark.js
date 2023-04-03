import { quizz } from "./data.js";
import { newQuestionCard } from "./card.js";

// export function showAllBookmarkedQuestion() {
//   const content = document.createElement("div");
//   console.log(quizz.length);
//   for (let counter = 0; counter < quizz.length; counter++) {
//     console.log(counter);
//     if (quizz[counter].bookmark === true) {
//       console.log(quizz[counter]);
//       content.append(newQuestionCard(counter, 3));
//     }
//   }
//   return content;
// }

export function changeBookmarkStatus(cardFocus) {
  console.log(quizz[cardFocus]);
  const myvar = document.querySelector(
    `[data-js="button_bookmark_question${cardFocus.toString()}"]`
  );

  if (quizz[cardFocus].bookmark) {
    quizz[cardFocus].bookmark = false;
    myvar.classList.remove("svg__fill__full");
  } else {
    quizz[cardFocus].bookmark = true;
    myvar.classList.add("svg__fill__full");
  }
  console.log(quizz[cardFocus]);
}
