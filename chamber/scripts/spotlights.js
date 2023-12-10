const spotlightsURL =
  "https://bowlofrocks.github.io/wdd230/chamber/data/spotlights.json";

async function getMembers() {
  const response = await fetch(spotlightsURL);
  try {
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayMembers(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayMembers(data) {
  console.log(data);
  const firstCard = document.querySelector("#first-card");
  firstCard.innerHTML = "";
  const secondCard = document.querySelector("#second-card");
  secondCard.innerHTML = "";
  const thirdCard = document.querySelector("#third-card");
  thirdCard.innerHTML = "";

  console.log(thirdCard);

  const goldNamesArr = data.members[0].names;
  const goldTitle = data.members[0].gold;
  const silverNamesArr = data.members[1].names;
  const silverTitle = data.members[1].silver;

  const goldNameOne =
    data.members[0].names[Math.floor(Math.random() * goldNamesArr.length)];

  const goldNameTwo =
    data.members[0].names[Math.floor(Math.random() * goldNamesArr.length)];

  const silverNameOne =
    data.members[1].names[Math.floor(Math.random() * silverNamesArr.length)];

  console.log(silverNameOne);
  let goldMemOne = document.createElement("p");
  let goldMemTwo = document.createElement("p");
  let silverMemOne = document.createElement("p");
  goldMemOne.textContent = `${goldTitle} : ${goldNameOne}`;
  goldMemTwo.textContent = `${goldTitle} : ${goldNameTwo}`;
  silverMemOne.textContent = `${silverTitle} : ${silverNameOne}`;

  firstCard.appendChild(goldMemOne);
  secondCard.appendChild(goldMemTwo);
  thirdCard.appendChild(silverMemOne);
}

getMembers();
