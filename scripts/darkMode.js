const modeButton = document.querySelector("#mode");
const main = document.querySelector(".light-mode");
const regularTextColor = document.querySelectorAll(".text-color");
const subtextColor = document.querySelectorAll(".subtext");
const titleColor = document.querySelector(".title");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("☑️")) {
    main.classList.toggle("light-mode");
    titleColor.classList.toggle("title");
    modeButton.textContent = "❎";
  } else {
    modeButton.textContent = "☑️";
  }
});
