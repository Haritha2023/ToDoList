let input = document.querySelector(".inputField");
let AddBtn = document.querySelector(".addBtn");
let List = document.querySelector(".list");
// let Task = document.querySelector(".task");
let taskCont = document.createElement("div");
// let TaskList = [];
// JSON.parse(localStorage.getItem("tasks"));
// AddBtn.addEventListener("click", function () {
//   // localStorage.setItem("Tasks", JSON.stringify(List.innerText));
//   if (input.value.length == 0) {
//     alert("Please enter a task");
//   } else {
//     taskCont.innerHTML += `<div class="task">
//     <span id="taskname">${input.value}</span>
//     <button class='delBtn'><i class="fa fa-trash"></i></button>
//     </div>`;
//     List.appendChild(taskCont);
//     TaskList.push({ task: input.value });
//     // console.log(TaskList);
//     localStorage.setItem("Tasks", JSON.stringify(TaskList));
//     let retriveData = JSON.parse(localStorage.getItem("Tasks"));
//     console.log(retriveData);

//     let DeleteTasks = List.querySelectorAll(".delBtn");
//     console.log(DeleteTasks);

//     for (let i = 0; i < DeleteTasks.length; i++) {
//       DeleteTasks[i].onclick = function () {
//         this.parentNode.remove();
//       };
//     }

//     var tasks = document.querySelectorAll(".task");
//     for (var i = 0; i < tasks.length; i++) {
//       tasks[i].onclick = function () {
//         this.classList.toggle("completed");
//       };
//     }
//     document.querySelector(".inputField").value = "";
//   }
// });

let taskList = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
console.log(taskList);

AddBtn.addEventListener("click", function () {
  const task = document.querySelector("input");
  createTask(task);
});

function createTask(task) {
  taskList.push(task.value);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  location.reload();
}

function displayTask(task) {
  let tasks = "";
  for (let i = 0; i < taskList.length; i++) {
    tasks += `<div class="task">
         <span id="taskname">${taskList[i]}</span>
         <button class='delBtn'><i class="fa fa-trash"></i></button>
         </div>`;
  }
  document.querySelector(".list").innerHTML = tasks;
  activateDeleteListeners();
  activateLineListeners();
}

function activateDeleteListeners() {
  let DelBtn = document.querySelectorAll(".delBtn");
  DelBtn.forEach((db, i) => {
    db.addEventListener("click", () => {
      deleteItem(i);
    });
  });
}
function activateLineListeners() {
  let Tasks = document.querySelectorAll(".task");
  for (let i = 0; i < Tasks.length; i++) {
    Tasks[i].addEventListener("click", () => {
      console.log(Tasks[i]);
      strikeTask(i);
      // Tasks[i].classList.add("completed");
    });
  }
}
function strikeTask(i) {
  console.log(taskList[i]);
  taskList[i].style.backgroundColor = "yellow";
  localStorage.setItem("tasks", JSON.stringify(taskList));
  location.reload();
}

function deleteItem(i) {
  taskList.splice(i, 1);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  location.reload();
}
window.onload = function () {
  displayTask();
  // strikeTask();
};
