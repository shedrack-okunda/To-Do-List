const task = document.getElementById("task");
const list = document.querySelector(".lists");

function clicked() {
  if (task.value === "") {
    alert("Please enter a task.");
  } else {
    // add task to the list
    let li = document.createElement("li");
    li.innerHTML = task.value;
    task.value = "";
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  saveData();
}

// add event listener for making a task as completed
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }

  saveData();
});

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function getData() {
  list.innerHTML = localStorage.getItem("data");
}

getData();
