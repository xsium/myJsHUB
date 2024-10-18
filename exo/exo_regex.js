const email = document.getElementById("email");
const password = document.getElementById("password");

//prepare email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // --> tout sauf @ + @ + tout sauf @ + . + tout sauf @

//prepare password validation
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,8}$/; //(doit contenir au moins 1 chiffre) ( doit contenir au moins 1 charactère spécial) [alpha+num+spécial] {longueur entre 6 et 8}

email.addEventListener("keyup", () => {
  if (emailRegex.test(email.value)) {
    email.style.backgroundColor = "green";
  } else {
    email.style.backgroundColor = "red";
  }
});
password.addEventListener("keyup", () => {
  let message = "";

  if (password.value.length < 6 || password.value.length > 8) {
    message += `Password must be between 6 and 8 characters.\n`;
  }
  if (!/[0-9]/.test(password.value)) {
    message += `Password must contain at least one number.\n`;
  }
  if (!/[!@#$%^&*]/.test(password.value)) {
    message += `Password must contain at least one special character.`;
  }
  if (passwordRegex.test(password.value)) {
    password.style.backgroundColor = "green";
    message = "Valid password";
  } else {
    password.style.backgroundColor = "red";
  }
  let validation = document.querySelector("#message");
  validation.innerText = message;
  validation.style.border = "1px white solid";
  validation.style.display = "block";
  validation.style.textAlign = "center";
});
