const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=48.71249262657531&lon=-94.59986785346584&units=imperial&appid=4ad8a947df6bc0535bf9d31e780a8afc";

const forcastUrl =
  "https://api.openweathermap.org/data/3.0/onecall?lat=48.71&lon=-94.59&exclude=hourly,minutely,alerts&appid=4ad8a947df6bc0535bf9d31e780a8afc";

async function apiFetch() {
  try {
    const response = await fetch(url);
    const forcastResponse = await fetch(forcastUrl);
    if (forcastResponse.ok) {
      const data = await forcastResponse.json();
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
  currentTemp.innerHTML = `${data.main.temp} &deg;F`;
  const inconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", inconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = `${desc}`;
}

apiFetch();
