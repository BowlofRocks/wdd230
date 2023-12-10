const spotlightsURL =
  "https://bowlofrocks.github.io/wdd230/chamber/data/spotlights.json";

const firstCard = document.querySelector("#first-card");

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

  const goldNamesArr = data.members[0].names;
  const goldTitle = data.members[0].gold;
  const goldNameOne =
    data.members[0].names[Math.floor(Math.random() * goldNamesArr.length)];

  console.log(goldNameOne);

  const goldNameTwo =
    data.members[0].names[Math.floor(Math.random() * goldNamesArr.length)];

  let p = document.createElement("p");
  p.textContent = `${goldTitle} : ${goldNameOne}`;

  console.log(p);

  firstCard.appendChild(p);
}

getMembers();
