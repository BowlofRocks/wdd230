const currentDate = new Date();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function populateYear() {
  const currentDate = new Date();
  const fullYear = currentDate.getFullYear();
  const copyrightSymbol = "&copy;";

  let content = `${copyrightSymbol} ${fullYear}`;

  let populateYear = document.getElementById("year");

  populateYear.innerHTML = content;
}

function lastModified() {
  const recentModification = `Last Modified -- 9/21/2023 -- 9:30p.m`;

  let lastModified = document.getElementById("last_modified");

  lastModified.innerHTML = recentModification;
}

function timeStamp(event) {
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = monthsOfYear[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const formattedDate = `Today is ${dayOfWeek}, ${month} ${day}, ${year}`;

  console.log(formattedDate);
}

populateYear();
lastModified();
