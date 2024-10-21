let url = "https://randomuser.me/api/";
let divApi = document.querySelector("#apiUser");

let newcard = document.createElement("div");
newcard.classList.add("card", "mx-auto", "m-3");
newcard.style.width = "400px";
newcard.style.backgroundColor = "#454545";
newcard.style.margin = "5px";
newcard.style.textAlign = "center";

let newIMG = document.createElement("img");
newIMG.classList.add("card-header");

let newDiv = document.createElement("div");
newDiv.classList.add("card-body");
newDiv.style.color = "white";
newDiv.style.borderRadius = "10px";

let pName = document.createElement("p");
pName.classList.add("card-body");
pName.style.color = "white";
pName.style.borderRadius = "10px";

let btnRandom = document.createElement("div");
btnRandom.classList.add("btn", "btn-secondary");
btnRandom.style.color = "white";
btnRandom.addEventListener("click", loadUser);
btnRandom.innerText = "get random";

divApi.append(newcard);
newcard.append(newIMG);
newcard.append(newDiv);
newDiv.append(pName);
newcard.append(btnRandom);

async function loadUser() {
  const dataUser = await getUser(url);
  displayUser(dataUser);
}

async function getUser(url) {
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }
  return data.results[0];
}

function displayUser(toPrint) {
  newcard.id = toPrint.name.title;
  newIMG.src = toPrint.picture.medium;
  pName.innerText = `${toPrint.name.title}. ${toPrint.name.last} ${toPrint.name.first}

  ${toPrint.email}

  Adress: ${toPrint.location.street.number}- ${toPrint.location.street.name}
  ${toPrint.location.city} - ${toPrint.location.country}

  ${toPrint.cell}
  `;
}
loadUser();
