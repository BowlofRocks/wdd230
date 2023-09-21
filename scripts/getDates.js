function populateYear() {
  const currentDate = new Date();
  const fullYear = currentDate.getFullYear();
  const copyrightSymbol = "&copy;";

  let content = `${copyrightSymbol} ${fullYear}`;

  let populateYear = document.getElementById("year");

  populateYear.innerHTML = content;
}

function lastModified() {
  const recentModification = `Last Modified -- 9/19/2023 -- 9:30p.m`;

  let lastModified = document.getElementById("last_modified");

  lastModified.innerHTML = recentModification;
}

populateYear();
lastModified();
