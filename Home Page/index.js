// setMode function
function setMode() {
  if (mode == "light") {
    modeElements.forEach((e) => {
      e.className = e.className + "_light";
    });
  } else {
    modeElements.forEach((e) => {
      e.className = e.className.replace("_light", "");
    });
  }
  setupHideShowButtons(); // called setupHideShowButtons
}

//  setupHideShowButtons functions
function setupHideShowButtons() {
  const hideShowButtons = document.querySelectorAll(
    '[data-js="hide-show-button"]'
  );
  hideShowButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const targetAnswer = event.target;
      const parentCard = targetAnswer.closest(".card");
      const answer = parentCard.querySelector('[data-js="answer"]');

      answer.classList.toggle("card-answer-invisible");

      if (answer.classList.contains("card-answer-invisible")) {
        button.textContent = "Show Answer";
      } else {
        button.textContent = "Hide Answer";
      }
    });
  });
}

//  getCookie dan setCookie functions
function setCookie(name, value, daysToExpire) {
  const expires = new Date();
  expires.setTime(expires.getTime() + daysToExpire * 24 * 60 * 60 * 1000); // Convert days to milliseconds

  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return "dark";
}

// Tentukan konstanta
const bodyElement = document.querySelector("header");
const toggleButton = document.querySelector('[data-js="toggle-button"]');
let mode = getCookie("lightmode");
const modeElements = document.querySelectorAll([
  ".header",
  ".photo-and-name",
  ".main-profile",
  ".footer",
  ".question-card",
  ".container",
  ".question-card:first-of-type",
  ".question-card:last-of-type",
]);

// Inisialisasi mode
setMode();

// Event listener for show answer toggle button
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    mode = mode === "dark" ? "light" : "dark";
    setCookie("lightmode", mode, 365);
    setMode();
  });
}

// Event Listener for toggle bookmark unchecked and checked
const bookmarkButton = document.querySelectorAll('[data-js="bookmark"]');

bookmarkButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    const targetBookmark = event.target;

    if (targetBookmark.classList.contains("bookmark-checked")) {
      targetBookmark.classList.remove("bookmark-checked");
      targetBookmark.classList.add("bookmark-unchecked");
    } else {
      targetBookmark.classList.add("bookmark-checked");
      targetBookmark.classList.remove("bookmark-unchecked");
    }
  });
});

function setupBookmarkButton() {
  const bookmarkButton = document.querySelectorAll('[data-js="bookmark"]');

  bookmarkButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      const targetBookmark = event.target;

      if (targetBookmark.classList.contains("bookmark-checked")) {
        targetBookmark.classList.remove("bookmark-checked");
        targetBookmark.classList.add("bookmark-unchecked");
      } else {
        targetBookmark.classList.add("bookmark-checked");
        targetBookmark.classList.remove("bookmark-unchecked");
      }
    });
  });
}
