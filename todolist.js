const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = createTaskElement(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.innerText = taskText;
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', deleteTask);
  li.appendChild(deleteButton);
  li.addEventListener('click', toggleTask);
  return li;
}

function deleteTask(e) {
  e.stopPropagation();
  const taskItem = e.target.parentElement;
  taskList.removeChild(taskItem);
}

function toggleTask(e) {
  const taskItem = e.target;
  taskItem.classList.toggle('completed');
}
