let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  // 2. Call the renderLeads() function
  inputEl.value = "";
  renderLeads();
});

deleteBtn.addEventListener("click", function () {
  ulEl.innerHTML = "";
  myLeads = [];
  inputEl.value = "";
});

// 1. Wrap the code below in a renderLeads() function
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li><a target='_blank' href='${myLeads[i]}'>
      ${myLeads[i]}"</a> </li>`;
  }
  ulEl.innerHTML = listItems;
}
