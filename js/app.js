const AddSectionTaskButton = document.querySelector(".addnew-task");
const inputTextTask = document.querySelector(".Add-task");
const TaskSubmitButton = document.querySelector(".add-task-button");
const PlaceForTasks = document.querySelector(".task-form");

AddSectionTaskButton?.addEventListener("click", () => {
  inputTextTask.style.visibility = "visible";
});

TaskSubmitButton?.addEventListener("click", () => {
  const TextOfTask = document.getElementById("task-text").value;

  if (TextOfTask == "" || null) {
  } else {
    const newTask = document.createElement("div");
    const newCheckbox = document.createElement("input");
    const newLabel = document.createElement("label");

    newLabel.classList.add("task-checkbox");
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

    newCheckbox.addEventListener("change", (event) => {
      const label = event.target.parentElement;
      if (event.target.checked) {
        label.style.textDecoration = "line-through";
      } else {
        label.style.textDecoration = "none";
      }
    });
  }
});
