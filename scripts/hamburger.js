const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".grid-container");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("show");
  hamButton.classList.toggle("open");
});
