const AddSectionTaskButton = document.querySelector('.addnew-task');
const inputTextTask = document.querySelector('.Add-task');
const TaskSubmitButton = document.querySelector('.add-task-button');
const PlaceForTasks = document.querySelector('.task-form');
const taskText = document.querySelector('#task-text');
const localStorageKey = 'task';

AddSectionTaskButton?.addEventListener('click', () => {
  inputTextTask.style.visibility = 'visible';
});

TaskSubmitButton?.addEventListener('click', () => {
  const TextOfTask = document.getElementById('task-text').value;

  if (TextOfTask == '' || null) {
  } else {
    const newTask = document.createElement('div');
    const newCheckbox = document.createElement('input');
    const newInput = document.createElement('textarea');
    const deleteButton = document.createElement('button');
    const deleteIcon = document.createElement('i');
    const editIcon = document.createElement('i');
    const EditButton = document.createElement('button');

    const task = TextOfTask;
    let tasks = [];
    if (localStorage.getItem(localStorageKey)) {
      tasks = JSON.parse(localStorage.getItem(localStorageKey));
    }

    tasks.push(task);
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));

    deleteIcon.classList.add('icon-trash');
    deleteButton.classList.add('delete-task-button');
    deleteButton.appendChild(deleteIcon);

    editIcon.classList.add('icon-pencil-alt');
    EditButton.classList.add('edit-task-button');
    EditButton.appendChild(editIcon);

    newInput.classList.add('created-input');
    newInput.value = TextOfTask;
    newInput.setAttribute('disabled', 'disabled');
    newInput.style.resize = 'none';

    newCheckbox.type = 'checkbox';
    newCheckbox.classList.add('task-checkbox');
    newCheckbox.value = `${TextOfTask}`;
    newCheckbox.name = `${TextOfTask}`;

    newTask.classList.add('created-task');

    newTask.appendChild(newCheckbox);
    newTask.appendChild(newInput);
    newTask.appendChild(EditButton);
    newTask.appendChild(deleteButton);

    PlaceForTasks.appendChild(newTask);
    document.getElementById('task-text').value = '';

    newCheckbox.addEventListener('change', (event) => {
      const label = event.target.parentElement;
      if (event.target.checked) {
        label.style.textDecoration = 'line-through';
      } else {
        label.style.textDecoration = 'none';
      }
    });

    deleteButton.addEventListener('click', () => {
      newTask.remove();
    });

    deleteButton.addEventListener('click', () => {
      const taskToDelete = newInput.value;
      let tasks = [];
      if (localStorage.getItem(localStorageKey)) {
        tasks = JSON.parse(localStorage.getItem(localStorageKey));
      }
      const filteredTasks = tasks.filter((task) => task !== taskToDelete);
      localStorage.setItem(localStorageKey, JSON.stringify(filteredTasks));

      newTask.remove();
    });

    newInput.addEventListener('keypress', (event) => {
      if (event.keyCode === 13) {
        newInput.setAttribute('disabled', 'disabled');
      }
    });

    EditButton.addEventListener('click', () => {
      newInput.removeAttribute('disabled');
      newInput.style.resize = 'vertical';
      newInput.focus();
    });

    newInput.addEventListener('blur', () => {
      if (newInput === document.activeElement) {
      } else {
        newInput.style.resize = 'none';
      }
    });
  }
});

window.addEventListener('load', () => {
  let tasks = [];
  if (localStorage.getItem(localStorageKey)) {
    tasks = JSON.parse(localStorage.getItem(localStorageKey));
  }

  tasks.forEach((task) => {
    const newTask = document.createElement('div');
    const newCheckbox = document.createElement('input');
    const newInput = document.createElement('textarea');
    const deleteButton = document.createElement('button');
    const deleteIcon = document.createElement('i');
    const editIcon = document.createElement('i');
    const EditButton = document.createElement('button');

    deleteIcon.classList.add('icon-trash');
    deleteButton.classList.add('delete-task-button');
    deleteButton.appendChild(deleteIcon);

    editIcon.classList.add('icon-pencil-alt');
    EditButton.classList.add('edit-task-button');
    EditButton.appendChild(editIcon);

    newInput.classList.add('created-input');
    newInput.value = task;
    newInput.setAttribute('disabled', 'disabled');
    newInput.style.resize = 'none';

    newCheckbox.type = 'checkbox';
    newCheckbox.classList.add('task-checkbox');
    newCheckbox.value = `${task}`;
    newCheckbox.name = `${task}`;

    newTask.classList.add('created-task');

    newTask.appendChild(newCheckbox);
    newTask.appendChild(newInput);
    newTask.appendChild(EditButton);
    newTask.appendChild(deleteButton);

    PlaceForTasks.appendChild(newTask);

    newCheckbox.addEventListener('change', (event) => {
      const label = event.target.parentElement;
      if (event.target.checked) {
        label.style.textDecoration = 'line-through';
      } else {
        label.style.textDecoration = 'none';
      }
    });

    deleteButton.addEventListener('click', () => {
      const taskToDelete = newInput.value;
      let tasks = [];
      if (localStorage.getItem(localStorageKey)) {
        tasks = JSON.parse(localStorage.getItem(localStorageKey));
      }
      const filteredTasks = tasks.filter((task) => task !== taskToDelete);
      localStorage.setItem(localStorageKey, JSON.stringify(filteredTasks));

      newTask.remove();
    });

    newInput.addEventListener('keypress', (event) => {
      if (event.keyCode === 13) {
        newInput.setAttribute('disabled', 'disabled');
      }
    });

    EditButton.addEventListener('click', () => {
      newInput.removeAttribute('disabled');
      newInput.style.resize = 'vertical';
      newInput.focus();

      newInput.addEventListener('blur', () => {
        if (!newInput.value.trim()) {
          newInput.value = task;
        }

        const updatedTask = newInput.value;
        const tasks = JSON.parse(localStorage.getItem(localStorageKey));
        const taskIndex = tasks.findIndex((t) => t === task);

        if (taskIndex > -1) {
          tasks.splice(taskIndex, 1, updatedTask);
          localStorage.setItem(localStorageKey, JSON.stringify(tasks));
        }

        newInput.setAttribute('disabled', 'disabled');
        newInput.style.resize = 'none';
      });
    });

    newInput.addEventListener('blur', () => {
      if (newInput === document.activeElement) {
      } else {
        newInput.style.resize = 'none';
      }
    });
  });
});
