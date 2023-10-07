const modeButton = document.querySelector("#mode");
const main = document.querySelector(".light-mode");
const regularTextColor = document.querySelectorAll(".text-color");
const subtextColor = document.querySelectorAll(".subtext");
const titleColor = document.querySelector(".title");
const homeColor = document.querySelector(".home");
const chamberColor = document.querySelector(".chamber");
const siteplanColor = document.querySelector(".site-plan");
const formColor = document.querySelector(".form");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("☑️")) {
    main.classList.toggle("light-mode");
    titleColor.classList.toggle("title");
    homeColor.classList.toggle("home");
    chamberColor.classList.toggle("chamber");
    siteplanColor.classList.toggle("site-plan");
    formColor.classList.toggle("form");

    for (i = 0; i < subtextColor.length; ++i) {
      subtextColor[i].classList.toggle("subtext");
    }

    for (i = 0; i < regularTextColor.length; ++i) {
      regularTextColor[i].classList.toggle("text-color");
    }

    modeButton.textContent = "❎";
  } else {
    modeButton.textContent = "☑️";
  }
});
