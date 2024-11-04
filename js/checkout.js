// Exercise 6
function validate(event) {
  event.preventDefault();

  var error = 0;
  // Get the input fields
  var fName = document.getElementById("fName");
  var fLastN = document.getElementById("fLastN");
  var fEmail = document.getElementById("fEmail");
  var ffPassword = document.getElementById("fPassword");
  var fAddress = document.getElementById("fAddress");
  var fPhone = document.getElementById("fPhone");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorLastN = document.getElementById("errorLastN");
  var errorEmail = document.getElementById("errorEmail");
  var errorPassword = document.getElementById("errorPassword");
  var errorAddress = document.getElementById("errorAddress");
  var errorPhone = document.getElementById("errorPhone");

  // regex validator
  const validators = {
    name: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/,
    lastN: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/,
    email: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
    address: /^.{3,}$/,
    phone: /^\d{9}$/,
  };

  // Reset error in inputs
  fName.classList.remove("is-invalid");
  fLastN.classList.remove("is-invalid");
  fEmail.classList.remove("is-invalid");
  ffPassword.classList.remove("is-invalid");
  fAddress.classList.remove("is-invalid");
  fPhone.classList.remove("is-invalid");

  // Validate fields entered by the user: name, phone, password, and email
  if (!validators.name.test(fName.value)) {
    fName.classList.add("is-invalid");
    errorName.innerText =
      "This field is required and must have, at least, 3 characters";
    error++;
  }

  if (!validators.lastN.test(fLastN.value)) {
    fLastN.classList.add("is-invalid");
    errorLastN.innerText =
      "This field is required and must have, at least, 3 characters";
    error++;
  }

  if (!validators.email.test(fEmail.value)) {
    fEmail.classList.add("is-invalid");
    errorEmail.innerText =
      "This field is required and must contain an '@' and have, at least, 3 characters";
    error++;
  }

  if (!validators.password.test(ffPassword.value)) {
    ffPassword.classList.add("is-invalid");
    errorPassword.innerText = "Enter a correct password";
    error++;
  }

  if (!validators.address.test(fAddress.value)) {
    fAddress.classList.add("is-invalid");
    errorAddress.innerText =
      " This field is required and must have, at least, 3 characters";
    error++;
  }

  if (!validators.phone.test(fPhone.value)) {
    fPhone.classList.add("is-invalid");
    errorPhone.innerText =
      " Invalid phone number!! Must be 9 digits with no letters";
    error++;
  }

  if (error > 0) {
    alert("Error");
  } else {
    alert("OK");
  }
}
