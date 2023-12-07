const spotlightsURL =
  "https://raw.githubusercontent.com/BowlofRocks/wdd230/main/chamber/data/spotlights.json";
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
