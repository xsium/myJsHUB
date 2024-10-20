import logo from "./src/winkporing.png";
import "./style.css";

document.querySelector("#app").innerHTML = `
      <nav class="navbar navbar-expand-lg d-flex flex-row">
        <div class="container-fluid" id="header1">
          <a class="navbar-brand pc" href="./index.html"
            ><img id="logo" src="${logo}" alt="logo"
          /></a>
        </div>
        <div class="container-fluid d-flex flex-column" id="header2">
          <h1>Tyrfing's Den</h1>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" id="spanheader"></span>
          </button>
          <div
            class="collapse navbar-collapse customnav"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2">
              <li class="nav-item">
                <a class="nav-link" href="./index.html">Accueil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/exo/exohub.html">Exercices</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/lessons/lessonshub.html">Cours</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/tp/tphub.html">TP</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
`;

document.querySelector("footer").innerHTML = `
        <div>
          <p>&copy; 2024 Tyrfing's personal Website</p>
        </div>
`;
let url = "https://y4e1hazwu7.execute-api.eu-west-3.amazonaws.com/f/simon";
const response = await fetch(url);
const data = await response.json();
