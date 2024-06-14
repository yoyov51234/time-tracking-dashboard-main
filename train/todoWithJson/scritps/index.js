import data from "./data.js";
import { deleteData } from "./data.js";
const todoList = document.getElementById('todoList');


function render() {
  todoList.innerHTML = '';

  data.forEach(item => {
    const div = document.createElement('div');
    const li = document.createElement('li');
    const btn = document.createElement('button');

    li.textContent = item.value;
    div.setAttribute('id', item.id);
    btn.textContent = 'Delete';
    btn.classList.add('delBtn');
    div.appendChild(li);
    div.appendChild(btn);
    todoList.appendChild(div);
  })

  const delBtns = document.querySelectorAll('.delBtn');
  delBtns.forEach(e => {
    if (!e.dataset.listener) {
      e.addEventListener('click', () => {
        const divId = e.parentElement;
        const parentid = divId.getAttribute('id');
        deleteData(parentid);

        // Remove the div from the DOM after deletion
        todoList.removeChild(divId);
      });
      e.dataset.listener = 'true';

    }

  }
  )
}

render();
