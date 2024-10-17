let pDom = document.querySelector("#testDom");
pDom.innerHTML =
  "récupération du paragraphe, colorisation en cours, merci de cliquer.";
pDom.addEventListener("click", onClickHandler2);
function onClickHandler2() {
  this.classList.add("tastePurple");
  this.classList.toggle("tastier");
}

let buttonList = document.querySelectorAll("button");
for (let i = 0; i < buttonList.length; ++i) {
  buttonList[i].addEventListener("click", onClickHandler);
}
function onClickHandler() {
  if (document.getElementById(this.id).matches("#add")) {
    document.getElementsByTagName("h1")[0].classList.add("tastePurple");
  } else if (document.getElementById(this.id).matches("#remove")) {
    document.getElementsByTagName("h1")[0].classList.remove("tastePurple");
  } else {
    document.getElementsByTagName("h1")[0].classList.toggle("tastier");
  }
}

const entry = document.getElementById("entry");
const toprint = document.getElementById("toprint");
if (localStorage.getItem("texte") != null) {
  onload = loadStorage(localStorage.getItem("texte"));
}
function loadStorage(input) {
  if (toprint != null) {
    toprint.innerText = input;
    entry.value = input;
  }
}

entry.addEventListener("keyup", onKeyUpHandler);
function onKeyUpHandler() {
  localStorage.setItem("texte", this.value);
  toprint.innerText = this.value;
}
