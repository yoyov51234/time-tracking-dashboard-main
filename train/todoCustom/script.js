let todoId = 0; // Unique ID for each to-do item

// find the elements
const addTodoBtn = document.getElementById('addTodoButton');
const todoList = document.getElementById('todoList');
const newTodo = document.getElementById('newTodo');

// 
addTodoBtn.addEventListener(
  'click', () => {

    const todoText = newTodo.value.trim();
    if (todoText) {
      addTodoButton(todoText);
      newTodo.value = '';
    }

  }
)

function addTodoButton(text) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  const completeButton = document.createElement('button');

  li.textContent = text;
  li.dataset.id = todoId; // Set unique ID using dataset
  li.dataset.completed = 'false'; // Set completed status using dataset

  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('deleteBtn');
  deleteButton.dataset.id = todoId; // Set unique ID for the delete button using dataset

  completeButton.textContent = 'Complete';
  completeButton.classList.add('completeBtn');
  completeButton.dataset.id = todoId; // Set unique ID for the complete button using dataset

  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  todoList.appendChild(li);

  todoId++;

}

todoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('deleteBtn')) {
    deleteTodo(event.target.dataset.id);
  } else if (event.target.classList.contains('completeBtn')) {
    completeTodo(event.target.dataset.id);
  }
});

// Function to delete a to-do item
function deleteTodo(id) {
  const todoItem = document.querySelector(`li[data-id='${id}']`);
  if (todoItem) {
    todoList.removeChild(todoItem);
  }
}

// Function to complete a to-do item
function completeTodo(id) {
  const todoItem = document.querySelector(`li[data-id='${id}']`);
  if (todoItem) {
    const isCompleted = todoItem.dataset.completed === 'true';
    todoItem.dataset.completed = !isCompleted;
    todoItem.classList.toggle('completed', !isCompleted);
  }
}




