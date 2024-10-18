class Imc {
  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
  }
  calcImc() {
    return (this.weight / (this.height * this.height)).toLocaleString(
      "fullwide",
      { maximumFractionDigits: 2 }
    );
  }
  displayImc() {
    console.log(
      `${this.name} (${this.weight} kg, ${
        this.height
      } M) a un IMC de : ${this.calcImc()}`
    );
  }
}
let tabImc = [
  new Imc("Sébastien Chabal", 135, 1.7),
  new Imc("Escaladeuse", 45, 1.68),
  new Imc("JOJO", 300, 2),
  new Imc("Gontrand", 90, 1.75),
  new Imc("Colonel Clock", 200, 1.75),
  new Imc("Josiane de la Vega", 99, 1.55),
];
tabImc.forEach((element) => {
  element.displayImc();
});

class employee {
  constructor(name, surname, age, salary) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.salary = salary;
    this.contractDuration = n;
    this.charge = chargePercent;
  }
  yearlyCost() {
    return this.salary * (1 + this.charge / 100) * this.contractDuration;
  }
}
class PME {
  constructor(name, team, income, fixedCost, materialCost) {
    this.name = name;
    this.team = team;
    this.income = income;
    this.fixedCost = fixedCost;
    this.materialCost = materialCost;
  }
  annualTeamCost() {
    let sum = 0;
    this.team.forEach((element) => {
      sum += element.yearlyCost();
    });
    return sum;
  }
  bilanCalculed() {
    let InitialCost = this.fixedCost + this.materialCost;
    let totalTeamCost = this.annualTeamCost();

    console.log(
      `
      ${this.name} : Cout Initial: ${InitialCost}\n
      ${this.name} : Cout Total Equipe: ${totalTeamCost}\n
      ${this.name} : Ventes: ${this.income}\n
      ${this.name} : Bilan: ${this.income - InitialCost - totalTeamCost}\n
      `
    );
  }
}

const n = 12;
const chargePercent = 90;
const R = 300000;
const FF = 20000;
const FA = 50000;

const pme = new PME(
  //Le nom entreprise
  "Arasaka",
  //L'equipe de salariés (un tableau)
  [
    new employee("Duval", "Paul", 30, 2000),
    new employee("Durand", "Alain", 40, 3000),
    new employee("Dois", "Sylvia", 50, 4000),
  ],
  //le revenu , frais fixe, frais d'achat
  R,
  FF,
  FA
);
pme.bilanCalculed();

class bankAccount {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
  }
  give(beneficiary, amount) {
    if (this.balance >= amount) {
      console.log(
        `Virement de: ${amount} de: ${this.name} vers: ${beneficiary.name}`
      );
      beneficiary.credit(amount);
      this.withdrawal(amount);
    } else {
      console.log(
        `${this.name}, virement de: ${amount} refusé avec solde: ${this.balance}`
      );
    }
  }
  withdrawal(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Retrait de: ${amount} pour: ${this.name}`);
    } else {
      console.log(
        `${this.name}, retrait de: ${amount} refusé avec solde: ${this.balance}`
      );
    }
  }
  credit(amount) {
    if (amount < 0) {
      console.log("Can't credit negative amount.");
    } else {
      this.balance += amount;
      console.log(`Ajout de: ${amount} pour: ${this.name}`);
    }
  }
  displayBA() {
    console.log(`Titulaire: ${this.name}, solde: ${this.balance}`);
  }
}
// Main, gère 3 comptes bancaires dans un tableau associatif
const lesComptes = {
  Alex: new bankAccount("Alex"),
  Clovis: new bankAccount("Clovis"),
  Marco: new bankAccount("Marco"),
};
// lecture tableau associatif ou Objet["truc"]
// Crédite et décrit chaque compte
for (let key in lesComptes) lesComptes[key].credit(1000);
// un retrait de 100 par Alex
lesComptes.Alex.withdrawal(100);
// un petit virement: Marco Vire 300 à Clovis
lesComptes.Marco.give(lesComptes.Clovis, 300);
// un petit retrait incorrect (doit déclencher erreur custom) :

// Alex fait un retrait de 1200
lesComptes.Alex.withdrawal(1200);
// bilan : faire une description de tous les comptes en console (ou DOM ?)
for (let key in lesComptes) lesComptes[key].displayBA();

//pokedex
let url = "https://pokeapi.co/api/v2/pokemon";
let pokedex = document.getElementById("pokemon");
let numberOfPokemon = 20;
pokedex.style.display = "flex";
pokedex.style.flexDirection = "row";
pokedex.style.flexWrap = "wrap";
pokedex.style.justifyContent = "center";

async function pokedexLoad() {
  const poketab = await getPokemons(url);
  const pokePrint = await getSprite(poketab);
  display(pokePrint);
}

function display(pokePrint) {
  pokePrint.forEach((pokemon) => {
    let newcard = document.createElement("div");
    newcard.classList.add("card");
    newcard.id = pokemon.pokeName;
    newcard.style.width = "250px";
    newcard.style.height = "200px";
    newcard.style.backgroundColor = "#454545";
    newcard.style.margin = "5px";

    let newp = document.createElement("p");
    newp.classList.add("card-header");
    newp.style.backgroundColor = "#171717";
    newp.style.color = "white";
    newp.style.borderRadius = "10px";
    newp.innerText = pokemon.pokeName;
    newp.style.textAlign = "center";

    let newIMG = document.createElement("img");
    newIMG.src = pokemon.sprite;
    newIMG.classList.add("card-body");

    pokedex.append(newcard);
    newcard.append(newp);
    newcard.append(newIMG);
  });
}

async function getPokemons(url) {
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }
  return data.results;
}

async function getSprite(poketab) {
  const pokePrint = [];
  for (const element of poketab) {
    const response = await fetch(element.url);
    const data = await response.json();
    pokePrint.push({
      pokeName: element.name,
      sprite: data.sprites.front_default,
    });
  }
  return pokePrint;
}

pokedexLoad();

//exercice click event + mouseleave  réuni ( sinon c'est pénible de pas pouvoir enlever les images)

let allPorings = []; // pour préparer le mouseleave

//click event
window.addEventListener("click", (event) => {
  console.log(event.clientX, event.clientY);
  let newImg = document.createElement("img");
  newImg.src = "../src/winkporing.png";
  newImg.style.position = "absolute";

  let posTop = event.clientY;
  let posLeft = event.clientX;

  newImg.style.top = posTop + "px";
  newImg.style.left = posLeft + "px";

  document.body.append(newImg);
  allPorings.push(newImg);
});
function applyInvertFilter(element, delay) {
  setTimeout(() => {
    element.style.filter = "invert(100%)";
  }, delay);
}

//mouseleave event
document.addEventListener("mouseleave", () => {
  allPorings.forEach((img) => {
    img.remove();
  });
  allPorings = [];
});

//setTimeout on site logo
setTimeout(() => {
  document.querySelector("#logo").style.filter = "invert(100%)";
}, 3000);
setTimeout(() => {
  document.querySelector("#logo").style.removeProperty("filter");
}, 6000);
