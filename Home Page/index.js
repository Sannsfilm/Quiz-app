// console.clear();

// Definisikan setMode
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
  setupHideShowButtons(); // Panggil setupHideShowButtons saat mode diatur
}

// Definisikan setupHideShowButtons
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

// definisikan getCookie dan setCookie
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

// Event listener untuk toggle button
toggleButton.addEventListener("click", () => {
  if (mode == "dark") {
    setCookie("lightmode", "light", 365);
    mode = "light";
  } else {
    mode = "dark";
    setCookie("lightmode", "dark", 365);
  }
  setMode();
});
