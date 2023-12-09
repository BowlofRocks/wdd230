const firstForcastTemp = document.querySelector("#first-forcast-temp");
const secondForcastTemp = document.querySelector("#second-forcast-temp");
const thirdForcastTemp = document.querySelector("#third-forcast-temp");

const firstIcon = document.querySelector("#first-icon");
const secondIcon = document.querySelector("#second-icon");
const thirdIcon = document.querySelector("#third-icon");

const firstCaptionDesc = document.querySelector("#first-caption");
const secondCaptionDesc = document.querySelector("#second-caption");
const thirdCaptionDesc = document.querySelector("#third-caption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=48.71249262657531&lon=-94.59986785346584&units=imperial&appid=4ad8a947df6bc0535bf9d31e780a8afc";

const forcastUrl =
  "https://api.openweathermap.org/data/2.5/forecast?lat=48.71&lon=-94.59&cnt=3&appid=4ad8a947df6bc0535bf9d31e780a8afc";

async function apiFetch() {
  try {
    const response = await fetch(url);
    const forcastResponse = await fetch(forcastUrl);
    if (forcastResponse.ok) {
      const data = await forcastResponse.json();
      displayResults(data);
      console.log(data);
      // displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  let firstForcast = data.list[0].main.temp;
  let secondForcast = data.list[1].main.temp;
  let thirdForcast = data.list[2].main.temp;

  firstForcastTemp.innerHTML = `${firstForcast} &deg;F`;
  secondForcastTemp.innerHTML = `${secondForcast} &deg;F`;
  thirdForcastTemp.innerHTML = `${thirdForcast} &deg;F`;

  let firstForcastIcon = data.list[0].weather[0].icon;
  let secondForcastIcon = data.list[1].weather[0].icon;
  let thirdForcastIcon = data.list[2].weather[0].icon;
  const firstInconsrc = `https://openweathermap.org/img/wn/${firstForcastIcon}@2x.png`;
  const secondInconsrc = `https://openweathermap.org/img/wn/${secondForcastIcon}@2x.png`;
  const thirdInconsrc = `https://openweathermap.org/img/wn/${secondForcastIcon}@2x.png`;

  firstIcon.setAttribute("src", firstInconsrc);
  secondIcon.setAttribute("src", secondInconsrc);
  thirdIcon.setAttribute("src", thirdInconsrc);

  let firstDesc = data.list[0].weather[0].description;
  let secondDesc = data.list[1].weather[0].description;
  let thirdDesc = data.list[2].weather[0].description;
  firstIcon.setAttribute("alt", firstDesc);

  firstCaptionDesc.textContent = `${firstDesc}`;
  secondCaptionDesc.textContent = `${secondDesc}`;
  thirdCaptionDesc.textContent = `${thirdDesc}`;
}

apiFetch();
