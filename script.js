//get the elements to perform actions upon
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value == "") {
    alert("You must write something!");
  } else {
    //insert an list item tag within ul tag
    // whenever there's item added
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    //insert the span tah with the cross mark to delete
    //along with task to delete
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  //after any taks is written and added,
  //   the inputbox is made sure to be kept empty
  inputBox.value = "";
  saveData();
}

//method to mark task as completed or incomplete based on available condition

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

//to save data or tasks that are added
//using localStorage.setItem,
//wehrein data is variable in which listContainer.innerHTML content is being stored.
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//saved data from is shown on UI within the listContainer using
// localStorage.getItem("data");
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

// invocking to show stored data
showTask();
