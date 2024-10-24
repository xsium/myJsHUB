const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const email_connect = document.getElementById("email_connect");
const password_connect = document.getElementById("password_connect");
const btnswitch = document.getElementById("switch");
const divSub = document.getElementById("subscribe");
const divCo = document.getElementById("connect");
const connectBtn = document.getElementById("connect-btn");
const subscribeBtn = document.getElementById("add-user-btn");

connectBtn.addEventListener("click", () => {
  var string = require("string-sanitizer");
  string.sanitize(email.value);
  string.sanitize(password.value);
});
subscribeBtn.addEventListener("click", () => {
  var string = require("string-sanitizer");
  string.sanitize(email.value);
  string.sanitize(password.value);
});

//prepare email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // --> tout sauf @ + @ + tout sauf @ + . + tout sauf @

//prepare password validation
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,32}$/; //(doit contenir au moins 1 chiffre) ( doit contenir au moins 1 charactère spécial) [alpha+num+spécial] {longueur entre 6 et 8}

//validation details
let detaildiv = document.querySelector("#details");
detaildiv.style.border = "1px white solid";
detaildiv.style.display = "block";
detaildiv.style.textAlign = "center";

let validationMail = document.querySelector("#messageMail");
let validationPassword = document.querySelector("#messagePassword");
let validationPassword2 = document.querySelector("#messagePassword2");

//onload default
validationMail.innerText = `Please enter a valid mail format.\n`;
validationPassword.innerText = `Password must be at least 6 characters with a maximum of 32 characters.\n Password must contain at least one number.\nPassword must contain at least one special character.`;
validationPassword2.innerText = `Both Passwords must be identicals`;

let messageMail = "";
let messagePass = "";
let messagePass2 = "";

email.addEventListener("keyup", () => {
  messageMail = "";
  if (emailRegex.test(email.value)) {
    email.style.backgroundColor = "green";
  } else {
    email.style.backgroundColor = "red";
    messageMail = `Please enter a valid mail format.\n`;
  }
  validationMail.innerText = messageMail;
});

password.addEventListener("keyup", () => {
  messagePass = "";

  if (password.value.length < 6 || password.value.length > 8) {
    messagePass += `Password must be at least 6 characters with a maximum of 32 characters.\n`;
  }
  if (!/[0-9]/.test(password.value)) {
    messagePass += `Password must contain at least one number.\n`;
  }
  if (!/[!@#$%^&*]/.test(password.value)) {
    messagePass += `Password must contain at least one special character.`;
  }
  if (passwordRegex.test(password.value)) {
    password.style.backgroundColor = "green";
    messagePass = "Valid password";
  } else {
    password.style.backgroundColor = "red";
  }
  validationPassword.innerText = messagePass;
});

password2.addEventListener("keyup", () => {
  messagePass2 = "";

  if (password2.value.localeCompare(password.value) != 0) {
    messagePass2 += `Both Passwords must be identicals`;
    password2.style.backgroundColor = "red";
  } else {
    password2.style.backgroundColor = "green";
  }
  validationPassword2.innerText = messagePass2;
});

btnswitch.addEventListener("click", () => {
  divCo.classList.toggle("d-none");
  divSub.classList.toggle("d-none");
  validationPassword2.classList.toggle("d-none");
  validationPassword.classList.toggle("d-none");

  if (btnswitch.innerText.localeCompare("déjà inscrit?") == 0) {
    btnswitch.innerText = "pas encore inscrit?";
  } else {
    btnswitch.innerText = "pas encore inscrit?";
  }
});

email_connect.addEventListener("keyup", () => {
  messageMail = "";
  if (emailRegex.test(email.value)) {
    email.style.backgroundColor = "green";
  } else {
    email.style.backgroundColor = "red";
    messageMail = `Please enter a valid mail format.\n`;
  }
  validationMail.innerText = messageMail;
});

password_connect.addEventListener("keyup", () => {});
