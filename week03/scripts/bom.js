const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");
let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", function () {
  if (input.value != "") {
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value); // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ""; // clear the input
    input.focus();
  }
});

function displayList(item) {
  let liElement = document.createElement("li");
  let deleteButton = document.createElement("button");
  liElement.textContent = item;
  deletebutton.textContent = "❌";
  deletebutton.classList.add("delete");

  liElement.append(deleteButton);

  list.append(liElement);

  deleteButton.addEventListener("click", function () {
    list.removeChild(liElement);
    deleteChapter(liElement.textContent);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
