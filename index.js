const form = document.getElementById("textEntry");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //this gets the "target" of the event
  const currentForm = e.target;
  //this gets the elements of the current form
  const formElements = currentForm.elements;

  //name JS variables for both the body & row of the table
  let tableBody = document.getElementById("table-body");
  let tableRow = document.createElement("tr");
  let deleteButton = deleteTableRow(tableRow);
  //loops through each individual input element to print new values on the page
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];

    if (element.nodeName === "INPUT") {
      let tableData = document.createElement("td");
      let columnText = document.createTextNode(element.value);
      //add new values to table data
      tableData.appendChild(columnText);
      //add new data to new row in table
      tableRow.appendChild(tableData);
      tableRow.appendChild(deleteButton);
      //add table body element to table row
      tableBody.appendChild(tableRow);

      console.log("${element.id} input is: ", element.value);
    }
  }
});
function deleteTableRow(tableRow) {
  let deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("X"));
  deleteButton.addEventListener("click", function () {
    tableRow.remove();

    console.log(deleteTableRow);
  });
  return deleteButton;
}
