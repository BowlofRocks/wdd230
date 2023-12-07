const spotlightsURL =
  "https://bowlofrocks.github.io/wdd230/chamber/data/spotlights.json";
async function getMembers() {
  const response = await fetch(spotlightsURL);
  try {
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
