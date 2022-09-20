const form = document.getElementById('textEntry');
form.addEventListener('submit', function(e) {
  e.preventDefault()

  const myForm = e.target;

  const formElements = form.elements;

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.nodeName === "INPUT") {
      console.log('${element.id} input is: ',
  element.value);
    }
  }
});

// progress made JS
let btnAdd = document.getElementById("submit");
let table = document.getElementById("table-container");
let dateInput = document.getElementById("date-input");
let expenseInput = document.getElementById("expense-input");
let costInput = getElementById("amount-input"); 
let locationInput = getElementById("location-input");

btnAdd.addEventListener('click', () => {
  let date = dateInput.value;
  let expense = expenseInput.value;
  let cost = costInput.value;
  let location = locationInput.value;
})