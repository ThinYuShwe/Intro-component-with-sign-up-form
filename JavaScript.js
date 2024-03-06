document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();
  const FnameInput = document.querySelector(".FnameInput");
  const LnameInput = document.querySelector(".LnameInput");
  const PassInput = document.querySelector(".PassInput");
  const EmailInput = document.querySelector(".EmailInput");

  const ErrorFirstName = document.getElementById("firstNameError");
  const ErrorLastName = document.getElementById("lastNameError");
  const ErrorPassword = document.getElementById("passwordError");
  const ErrorEMail = document.getElementById("emailError");

  const ErrorFirstNameIcon = document.getElementById("fNameErrorIcon");
  const ErrorLastNameIcon = document.getElementById("lastNameErrorIcon");
  const ErrorPasswordIcon = document.getElementById("PassErrorIcon");
  const ErrorEmailIcon = document.getElementById("EmailErrorIcon");

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (FnameInput.value.trim() === "") {
    ErrorFirstName.style.display = "block";
    ErrorFirstNameIcon.style.display = "block";
    FnameInput.classList.add("error-border");
  } else {
    ErrorFirstName.style.display = "none";
    ErrorFirstNameIcon.style.display = "none";
    FnameInput.classList.remove("error-border");
  }

  if (LnameInput.value.trim() === "") {
    ErrorLastName.style.display = "block";
    ErrorLastNameIcon.style.display = "block";
    LnameInput.classList.add("error-border");
  } else {
    ErrorLastName.style.display = "none";
    ErrorLastNameIcon.style.display = "none";
    LnameInput.classList.remove("error-border");
  }

  if (PassInput.value.trim() === "") {
    ErrorPassword.style.display = "block";
    ErrorPasswordIcon.style.display = "block";
    PassInput.classList.add("error-border");
  } else {
    ErrorPassword.style.display = "none";
    ErrorPasswordIcon.style.display = "none";
    PassInput.classList.remove("error-border");
  }

  if (EmailInput.value.match(pattern)) {
    ErrorEMail.style.display = "none";
    ErrorEmailIcon.style.display = "none";
    EmailInput.classList.remove("error-border");
  } else {
    ErrorEMail.style.display = "block";
    ErrorEmailIcon.style.display = "block";
    EmailInput.classList.add("error-border");
  }
});
