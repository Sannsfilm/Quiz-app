// console.clear();

const formElement = document.querySelector('[data-js="form-container"]');
const mainContent = document.querySelector('[data-js="main-content"]');

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const question = document.querySelector('[data-js="question" ]').value;
  const answer = document.querySelector('[data-js="answer" ]').value;
  const tag = document.querySelector('[data-js="tag" ]').value;

  // Generate all DOM element for a card with createElement()

  // new card

  const newCard = document.createElement("main");
  newCard.classList.add("question-card");

  // section for card
  const section = document.createElement("section");
  section.classList.add("card");

  // div for question
  const questionDiv = document.createElement("div");
  const questionHeading = document.createElement("h3");
  questionHeading.textContent = question;
  questionDiv.appendChild(questionHeading);
  section.appendChild(questionDiv);

  // button hide-show
  const hideShowButton = document.createElement("button");
  hideShowButton.setAttribute("data-js", "hide-show-button");
  hideShowButton.setAttribute("id", "answer3");
  hideShowButton.classList.add("answer");
  hideShowButton.textContent = "Show Answer";
  section.appendChild(hideShowButton);

  // div for answer
  const answerDiv = document.createElement("div");
  answerDiv.setAttribute("data-js", "answer");
  answerDiv.setAttribute("id", "answerButton3");
  answerDiv.classList.add("card-answer-invisible");
  const answerParagraph = document.createElement("p");
  answerParagraph.textContent = answer;
  answerDiv.appendChild(answerParagraph);
  section.appendChild(answerDiv);

  // bookmark button
  const bookmarkButton = document.createElement("button");
  bookmarkButton.setAttribute("data-js", "bookmark");
  bookmarkButton.classList.add("bookmark");

  // elemen SVG for bookmark button
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.classList.add("bookmark-unchecked");
  svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgElement.setAttribute("version", "1.1");
  svgElement.setAttribute("viewBox", "0 0 200 200");

  // element for SVG path
  const pathElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathElement.classList.add("cls-1");
  pathElement.setAttribute("d", "M197,3H3v191l97-55,97,55V3h0Z");

  // Menggabungkan path ke dalam SVG dan SVG ke dalam tombol bookmark
  svgElement.appendChild(pathElement);
  bookmarkButton.appendChild(svgElement);
  section.appendChild(bookmarkButton);

  // DIV for tags
  const tagDiv = document.createElement("div");
  tagDiv.setAttribute("id", "tags");

  // div for tag individual
  const tagContentDiv = document.createElement("div");
  tagContentDiv.classList.add("div-tags");
  const tagParagraph = document.createElement("p");
  tagParagraph.textContent = tag;
  tagContentDiv.appendChild(tagParagraph);

  // Menggabungkan tag ke dalam div tag
  tagDiv.appendChild(tagContentDiv);
  section.appendChild(tagDiv);

  // section to new card
  newCard.appendChild(section);

  // new card to main content in form.html
  mainContent.appendChild(newCard);

  // hide show button function
  setupHideShowButtons();

  // bookmark button
  setupBookmarkButton();

  event.target.reset();
  document.querySelector('[data-js="question"]').focus();
});

console.clear();

const questionElement = document.querySelector('[data-js="question"]');
const answerElement = document.querySelector('[data-js="answer"]');
const amountLeftAnswer = document.querySelector('[data-js="amountLeftAnswer"]');
const amountLeftQuestion = document.querySelector(
  '[data-js="amountLeftQuestion"]'
);
const maxLengthQuestion = questionElement.getAttribute("maxlength");
const maxLengthAnswer = answerElement.getAttribute("maxlength");

questionElement.addEventListener("input", () => {
  const questionCountDisplay = maxLengthQuestion - questionElement.value.length;
  amountLeftQuestion.textContent = questionCountDisplay;
});

answerElement.addEventListener("input", () => {
  const answerCountDisplay = maxLengthAnswer - answerElement.value.length;
  amountLeftAnswer.textContent = answerCountDisplay;
});

// const inputText = document.querySelectorAll('[data-js="inputText"]');

// inputText.forEach((singleTextArea) => {
//   singleTextArea.addEventListener("input", (event) => {
//     const textLength = event.target.value.length;
//     const maxlength = event.target.getAttribute("maxlength");
//     const remainingCharachters = maxlength - textLength;
//     const spans = document.querySelectorAll('[data-js="character-counter"]');

//     spans.textContent = remainingCharachters;
//   });
// });
