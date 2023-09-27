const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function () {
  if (input.value != "") {
    console.log("Error: Nothing is submitted");
  } else {
    input.focus();
  }

  const liElement = document.createElement("li");
  const deleteButton = document.createElement("button");
  liElement.textContent = input.value;
  deleteButton.textContent = "❌";

  liElement.append(deleteButton);

  list.append(liElement);

  deleteButton.addEventListener("click", function () {
    list.removeChild(liElement);
    input.focus();
  });
});
