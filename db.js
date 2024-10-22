// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLEHh8NIUFtOwjzwpxSOI9l3aM-4Hx_jY",
  authDomain: "tyrfingdb.firebaseapp.com",
  databaseURL:
    "https://tyrfingdb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tyrfingdb",
  storageBucket: "tyrfingdb.appspot.com",
  messagingSenderId: "116656638998",
  appId: "1:116656638998:web:a58f6b66a70b009debf937",
  measurementId: "G-FB3V72M76G",
};

//firebase start
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//On va créer une référence à notre BDD
const dbRef = firebase.database().ref();
// On va également faire une ref directement dans le noeud / """"table""""" users
const usersRef = dbRef.child("users");
const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked);
const EditUserBtnUI = document.getElementById("edit-user-btn");
EditUserBtnUI.addEventListener("click", editButtonClicked);
const formUserUI = document.getElementById("add-user-form");
formUserUI.addEventListener("submit", (event) => event.preventDefault());
const formUserEditUI = document.getElementById("edit-user-module");
formUserEditUI.addEventListener("submit", (event) => event.preventDefault());
const userListUI = document.getElementById("user-list");
const userDetailUI = document.getElementById("user-detail");

readUserData();
function addUserBtnClicked() {
  const inputs = document.querySelectorAll(".user-input");
  let newUser = {};

  inputs.forEach((input) => {
    let key = input.getAttribute("data-key");
    let value = input.value;
    newUser[key] = value;
  });
  console.log(newUser);
  usersRef.push(newUser);
  //reset form
}
function readUserData() {
  usersRef.on("value", (snap) => {
    userListUI.innerHTML = "";
    snap.forEach((snapchild) => {
      let key = snapchild.key;
      let value = snapchild.val();
      let $li = document.createElement("li");
      $li.innerHTML = value.name;
      $li.setAttribute("user-key", key);
      console.log($li);
      $li.addEventListener("click", userClicked);
      userListUI.append($li);
    });
  });
}
function userClicked(event) {
  let userID = event.target.getAttribute("user-key");
  let userRef = dbRef.child(`users/` + userID);
  let userDetailUI = document.getElementById("user-details");
  userRef.on("value", (snap) => {
    userDetailUI.innerHTML = "";
    snap.forEach((snapchild) => {
      let $p = document.createElement("p");
      $p.innerHTML = snapchild.key + ": " + snapchild.val();
      userDetailUI.append($p);
    });
  });
}
function editButtonClicked(event) {
  formUserEditUI.style.display = "block";
  formUserUI.style.display = "none";
  //let inputId = document.querySelector(.edit-userid)?????
}
function saveUserBtnClicked() {}
function deleteButtonClicked(event) {}
