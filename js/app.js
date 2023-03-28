const AddSectionTaskButton = document.querySelector(".addnew-task");
const inputTextTask = document.querySelector(".Add-task");
const TaskSubmitButton = document.querySelector(".add-task-button");
const PlaceForTasks = document.querySelector(".task-form");
const taskText = document.querySelector("#task-text");

AddSectionTaskButton?.addEventListener("click", () => {
  inputTextTask.style.visibility = "visible";
});

TaskSubmitButton?.addEventListener("click", () => {
  const TextOfTask = document.getElementById("task-text").value;

  if (TextOfTask == "" || null) {
  } else {
    const newTask = document.createElement("div");
    const newCheckbox = document.createElement("input");
    const newInput = document.createElement("input");
    const deleteButton = document.createElement("button");
    const deleteIcon = document.createElement("i");
    const editIcon = document.createElement("i");
    const EditButton = document.createElement("button");

    deleteIcon.classList.add("icon-trash");
    deleteButton.classList.add("delete-task-button");
    deleteButton.appendChild(deleteIcon);

    editIcon.classList.add("icon-pencil-alt");
    EditButton.classList.add("edit-task-button");
    EditButton.appendChild(editIcon);

    newInput.classList.add("created-input");
    newInput.value = TextOfTask;
    newInput.setAttribute("disabled", "disabled");

    newCheckbox.type = "checkbox";
    newCheckbox.classList.add("task-checkbox");
    newCheckbox.value = `${TextOfTask}`;
    newCheckbox.name = `${TextOfTask}`;

    newTask.classList.add("created-task");

    newTask.appendChild(newCheckbox);
    newTask.appendChild(newInput);
    newTask.appendChild(EditButton);
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

    newInput.addEventListener("keypress", (event) => {
      if (event.keyCode === 13) {
        newInput.setAttribute("disabled", "disabled");
      }
    });

    EditButton.addEventListener("click", () => {
      newInput.removeAttribute("disabled");
      newInput.focus();
    });
  }
});

taskText?.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    const TextOfTask = document.getElementById("task-text").value;
    if (TextOfTask == "" || null) {
    } else {
      const newTask = document.createElement("div");
      const newCheckbox = document.createElement("input");
      const newInput = document.createElement("input");
      const deleteButton = document.createElement("button");
      const deleteIcon = document.createElement("i");
      const editIcon = document.createElement("i");
      const EditButton = document.createElement("button");

      deleteIcon.classList.add("icon-trash");
      deleteButton.classList.add("delete-task-button");
      deleteButton.appendChild(deleteIcon);

      editIcon.classList.add("icon-pencil-alt");
      EditButton.classList.add("edit-task-button");
      EditButton.appendChild(editIcon);

      newInput.classList.add("created-input");
      newInput.value = TextOfTask;
      newInput.setAttribute("disabled", "disabled");

      newCheckbox.type = "checkbox";
      newCheckbox.classList.add("task-checkbox");
      newCheckbox.value = `${TextOfTask}`;
      newCheckbox.name = `${TextOfTask}`;

      newTask.classList.add("created-task");

      newTask.appendChild(newCheckbox);
      newTask.appendChild(newInput);
      newTask.appendChild(EditButton);
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

      newInput.addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
          newInput.setAttribute("disabled", "disabled");
        }
      });

      EditButton.addEventListener("click", () => {
        newInput.removeAttribute("disabled");
        newInput.focus();
      });
    }
  }
});
