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
    const deleteButton = document.createElement("button");
    const deleteIcon = document.createElement("i");

    deleteIcon.classList.add("icon-trash");
    deleteButton.classList.add("delete-task-button");
    deleteButton.appendChild(deleteIcon);

    newLabel.classList.add("task-checkbox");
    newLabel.innerHTML = `${TextOfTask}`;

    newCheckbox.type = "checkbox";
    newCheckbox.classList.add("task-checkbox");
    newCheckbox.value = `${TextOfTask}`;
    newCheckbox.name = `${TextOfTask}`;

    newTask.classList.add("created-task");

    newTask.appendChild(newCheckbox);
    newTask.appendChild(newLabel);
    newTask.appendChild(deleteButton);
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

    deleteButton.addEventListener("click", () => {
      newTask.remove();
    });
  }
});
