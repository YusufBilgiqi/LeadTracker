import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const firebaseConfig = {
  databaseURL:
    "https://leads-tracker-app-8f6b0-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads");

onValue(referenceInDB, function (snapshot) {
  const snapshotDoesExist = snapshot.exists();
  if (snapshotDoesExist) {
    const snapshotValues = snapshot.val();
    const leads = Object.values(snapshotValues);
    render(leads);
  }
});

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

// Renders the leads from local storage

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li><a target='_blank' href='${leads[i]}'>
      ${leads[i]}"</a> </li>`;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  remove(referenceInDB);
  ulEl.innerHTML = "";
  inputEl.value = "";
  console.clear();
});

inputBtn.addEventListener("click", function () {
  push(referenceInDB, inputEl.value);
  inputEl.value = "";
});

// localStorage.setItem("a"; "b") => a:key, b:value
// localStorage.getItem() => key
// JSON.parse() => makes array from a string
// JSON.stringify => makes a string from a array
// console.log(JSON.stringify(typeof myLeads));
