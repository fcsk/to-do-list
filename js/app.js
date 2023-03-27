const AddSectionTaskButton = document.querySelector(".addnew-task");
const inputTextTask = document.querySelector(".Add-task");
const TaskSubmitButton = document.querySelector(".add-task-button");
const checkBox = document.querySelector(".task-checkbox");
const PlaceForTasks = document.querySelector(".task-form");
const newTask = document.createElement("div");

AddSectionTaskButton?.addEventListener("click", () => {
  inputTextTask.style.visibility = "visible";
});

TaskSubmitButton?.addEventListener("click", () => {
  const TextOfTask = document.getElementById("task-text").value;
  const newCheckbox = document.createElement("input");
  const newLabel = document.createElement("label");

  newLabel.classList.add(".task-checkbox");
  newLabel.innerHTML = `${TextOfTask}`;

  newCheckbox.type = "checkbox";
  newCheckbox.classList.add("task-checkbox");
  newCheckbox.value = `${TextOfTask}`;
  newCheckbox.name = `${TextOfTask}`;

  newTask.classList.add("created-task");

  newTask.appendChild(newCheckbox);
  newTask.appendChild(newLabel);
  PlaceForTasks.appendChild(newTask);
  document.getElementById("task-text").value = "";
});
