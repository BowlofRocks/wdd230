let currentTime = new Date().getTime;
let lastVisitedTime = localStorage.getItem("lastVisited");
let visitorMessage = "";

if (lastVisitedTime) {
  let timeDifference = currentTime - lastVisitedTime;
  let dayDifference = timeDifference / (1000 * 60 * 60 * 24);

  if (dayDifference > 1) {
    message = `You last vivisted ${Math.round(dayDifference).toLocaleString}`;
  } else {
    message = "Back so soon! Awesome!";
  }
} else {
  message = "Welcome! Let us know if you have any questions";
}
document.querySelector("#visitor-message").textContent = message;

localStorage.setItem("lastVisited", currentTime);
