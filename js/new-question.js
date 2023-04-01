import { newQuestionCard } from "./utils/card.js";
import { cardContainer } from "./utils/card.js";

export function addNewQuestion() {
  console.log("NewQuestPage");
  return addForm("150");
}

function addForm(maxLength) {
  const form = document.createElement("form");
  const container = cardContainer();
  form.append(
    addTextArea("newQuestion", maxLength, " Post your Question here.")
  );
  form.append(addTextArea("newAnswer", maxLength, " Post your ANSWER here."));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const element = event.target.elements;
    const main = document.querySelector("main");
    const formValues = [
      element.newQuestion.value,
      element.newAnswer.value,
      element.inputtag.value,
    ];
    main.append(showNewQuestionSummary(formValues));
  });
  form.append(addTagInput());
  form.append(addSubmitButton());
  container.append(form);
  return container;
}

function showNewQuestionSummary(formValues) {
  const container = cardContainer();
  formValues.forEach((element) => {
    const content = document.createElement("p");
    content.textContent = element;
    container.append(content);
  });
  return container;
}

function addTagInput() {
  const container = cardContainer();
  const label = document.createElement("label");
  label.setAttribute("for", "inputtag");
  label.textContent = "Post your tag here";
  label.name = "inputtag";
  const input = document.createElement("input");
  input.name = "inputtag";
  container.append(label, input);
  return container;
}

function addSubmitButton() {
  const container = cardContainer();
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Submit";
  container.append(button);
  return container;
}

function addTextArea(name, maxlength, labelName) {
  const container = document.createElement("div");
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
  container.append(label, textArea, charCounter);
  return container;
}
