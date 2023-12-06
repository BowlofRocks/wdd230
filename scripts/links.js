const baseUrl = "https://bowlofrocks.github.io/wdd230/";
const linksURL = "https://bowlofrocks.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  try {
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayLinks(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getLinks();

function displayLinks(data) {
  console.log(data);
  let linkElement = document.querySelector("#links");
  linkElement.innerHTML = "";

  data.weeks.forEach((week) => {
    let links = week.links;
    console.log(links);
    let weekNumber = week.week;
    console.log(weekNumber);

    let li = document.createElement("li");
    li.textContent = `${weekNumber} `;

    links.forEach((link) => {
      let url = link.url;
      let title = link.title;
      let anchor = document.createElement("a");

      anchor.setAttribute("href", url);
      anchor.textContent = `${title} || `;
      li.appendChild(anchor);
    });
    linkElement.appendChild(li);
  });
}
