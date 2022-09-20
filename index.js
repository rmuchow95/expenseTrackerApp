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