import { newQuestionCard } from "./utils/card.js";
import { cardContainer } from "./utils/card.js";

export function addNewQuestion() {
  console.log("NewQuestPage");
  const section = cardContainer();
  section.append(addForm(150));
  return section;
}

function addForm(maxLength) {
  const form = document.createElement("form");
  form.append(addTextArea("newQestion", "150", " Post your Question here."));
  form.append(addTextArea("newAnswer", "150", " Post your ANSWER here."));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target);
  });
  form.append(addSubmitButton());
  return form;
}

function addSubmitButton() {
  const htmlstructure = cardContainer();
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Drück mich";
  button.addEventListener("submit", (event) => {
    //event.preventDefault();
    console.log("click submit-form");

    //const newCard = document.createElement("article");

    // newCard.classList.add("card");
    // const newQuestion = document.createElement("p");
    // newQuestion.classList.add("card__question");
    // newQuestion.textContent = newForm.newQuestion.value;

    // const newAnswer = document.createElement("p");
    // newAnswer.classList.add("card__answer");
    // newAnswer.textContent = newForm.newAnswer.value;

    // const newTag = document.createElement("p");
    // newTag.textContent = newForm.inputTag.value;

    //     newCard.append(newQuestion);
    //     newCard.append(newAnswer);
    //     newCard.append(newTag);
    //     newMain.append(newCard);
  });

  htmlstructure.append(button);
  return htmlstructure;
}

function addTextArea(name, maxlength, labelName) {
  const section = cardContainer();
  const label = document.createElement("label");
  const charCounter = document.createElement("p");
  charCounter.textContent = maxlength + " character left";
  label.setAttribute("for", name.toLowerCase());
  label.textContent = labelName;
  const textArea = document.createElement("textarea");
  textArea.classList.add("new__question__text");
  textArea.name = name;
  textArea.id = name.toLowerCase();
  textArea.maxLength = maxlength;
  textArea.cols = "40";
  textArea.rows = "5";
  textArea.addEventListener("input", (event) => {
    const charcounter =
      Number(maxlength) -
      Number(event.target.value.length) +
      "  character left";
    charCounter.textContent = charcounter;
  });
  section.append(label, textArea, charCounter);
  return section;
}

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
