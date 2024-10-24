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
  appId: "1:116656638998:web:9455c07b0c1884f4ebf937",
  measurementId: "G-JLM5H6GZPY",
};

firebase.initializeApp(firebaseConfig);
//On va créer une référence à notre BDD
const dbRef = firebase.database().ref();
const tasksRef = dbRef.child("tasks");

//store add task button +addevent click
const addTaskBtnUI = document.getElementById("add-task-btn");
addTaskBtnUI.addEventListener("click", addTaskBtnClicked);
//store form + addevent submit prevent
const formUI = document.getElementById("add-task-form");
formUI.addEventListener("submit", (event) => event.preventDefault());

//store list
const taskListUI = document.getElementById("task-list");

function readUserData() {
  tasksRef.on("value", (snap) => {
    taskListUI.innerHTML = "";
    snap.forEach((childSnap) => {
      // Key va stocker les ID des tasks , value contient la task ( accès value.task)
      let key = childSnap.key;
      let value = childSnap.val();
      console.log(value);
      let $li = document.createElement("li");

      //bouton delete
      let deleteIconUI = document.createElement("button");
      deleteIconUI.innerText = "Delete";
      deleteIconUI.setAttribute("class", "btn btn-outline-danger mx-3");
      deleteIconUI.setAttribute("taskid", key);
      deleteIconUI.addEventListener("click", deleteButtonClicked);

      //remplir le li avec la task
      $li.innerText = value.task;
      $li.append(deleteIconUI);
      $li.setAttribute("task-key", key);
      $li.setAttribute(
        "class",
        "list-group-item d-flex justify-content-between align-items-center"
      );
      //* À la lecture de chaque utilisateur on le rend clickable pour afficher les détails
      taskListUI.append($li);
    });
  });
}

function addTaskBtnClicked() {
  //récupération de l'input
  const addUserInputsUI = document.getElementById("task");
  console.log(addUserInputsUI);
  //*stocker les infos de la tâche
  let newTask = {};

  //* récupère les key et value
  let key = addUserInputsUI.getAttribute("data-key");
  //* récupère la value.
  let value = addUserInputsUI.value;
  //* donner key et value à newTask
  newTask[key] = value;

  //* Enfin on ajoute notre nouvel utilisateur dans la BDD avec .push()
  tasksRef.push(newTask);
  console.log("New Task SAVED");
  console.log(`${newTask.task}`);
  //* reset form
  formUI.reset();
}

function deleteButtonClicked(event) {
  console.log(event);
  let taskID = event.target.getAttribute("taskid");
  const taskRef = dbRef.child("tasks/" + taskID);
  taskRef.remove();
}
readUserData();
