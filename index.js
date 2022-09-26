const form = document.getElementById("textEntry");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const currentForm = e.target;
  const formElements = currentForm.elements;

  let tableBody = document.getElementById("table-body");
  let tableRow = document.createElement("tr");
  let deleteButton = deleteTableRow(tableRow);

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];

    if (element.nodeName === "INPUT") {
      let tableData = document.createElement("td");
      let columnText = document.createTextNode(element.value);

      tableData.appendChild(columnText);
      tableRow.appendChild(tableData);
      tableData.appendChild(deleteButton);
      tableBody.appendChild(tableRow);
    }
  }
  currentForm.reset();
});
function deleteTableRow(tableRow) {
  let deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("X"));
  deleteButton.addEventListener("click", function () {
    tableRow.remove();
  });
  return deleteButton;
}
