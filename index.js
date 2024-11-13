let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// Renders the leads from local storage

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li><a target='_blank' href='${leads[i]}'>
      ${leads[i]}"</a> </li>`;
  }
  ulEl.innerHTML = listItems;
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);
  console.log(localStorage.getItem("myLeads"));
});

deleteBtn.addEventListener("dblclick", function () {
  ulEl.innerHTML = "";
  myLeads = [];
  inputEl.value = "";
  localStorage.clear();
  console.clear();
});

// localStorage.setItem("a"; "b") => a:key, b:value
// localStorage.getItem() => key
// JSON.parse() => makes array from a string
// JSON.stringify => makes a string from a array
// console.log(JSON.stringify(typeof myLeads));
