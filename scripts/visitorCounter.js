let numVisits = 1;

if (localStorage.getItem("numVisits")) {
  numVisits = parseInt(localStorage.getItem("numVisits"));
  numVisits++;
}

localStorage.setItem("numVisits", numVisits);

let numVisitsSpan = document.querySelector("#number-of-visits");
numVisitsSpan.textContent = numVisits;
