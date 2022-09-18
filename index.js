const form = document.getElementById("textEntry");

function addTableRow(e) {
  e.preventDefault();
  // let table = document.getElementById("table-container");
  // let tableRow = table.insertRow(0);
  console.log("click");
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", addTableRow);
