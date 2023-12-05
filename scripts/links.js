const baseUrl = "https://bowlofrocks.github.io/wdd230/";
const linksURL = "https://bowlofrocks.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  console.log(data);
}

function displayLinks(weeks){
  weeks.foreach(week) => console.log(*)
}

getLinks();
