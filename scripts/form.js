const kp1 = document.querySelector("#pword");
const kp2 = document.querySelector("#pword2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
  console.log("I am working");
  console.log(kp1.value);
  console.log(kp2.value);
  if (kp1.value !== kp2.value) {
    message.textContent = "❗Key Phrases DO NOT MATCH!";
    message.style.visibility = "show";
    kp2.style.backgroundColor = "#fff0f3";
    kp2.value = "";
    kp2.focus();
  } else {
    message.style.display = "none";
    kp2.style.backgroundColor = "#fff";
    kp2.style.color = "#000";
  }
}
