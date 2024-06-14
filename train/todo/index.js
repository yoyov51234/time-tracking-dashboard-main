const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const itemList = document.getElementById('itemList');
let todoList = getLocalStorage.stringify();
// fetch("./data.json")
//   .then(response => {
//     response.json();
//     console.log(response);
//   })
//   .then(data => {
//     todoList = data;
//     console.log(data);
//   })
//   .catch(console.log('something wrong happen'))

// parseLocalStorage(getLocalStorage('todoList'));

addItemButton.addEventListener(
  'click', () => {

    if (itemInput.value === '' || itemInput.value == null) {
      alert('please enter a new item')
    } else {
      const newItem = {

      };
      newItem.id = new Date().valueOf();
      newItem.value = itemInput.value;

      todoList.push(newItem);
      setLocalStorage();
      itemInput.value = '';
      render();
    }


  }
)

function render() {
  itemList.innerHTML = '';
  todoList.forEach(
    (item) => {
      const div = document.createElement('div');
      div.setAttribute('id', item.id);
      const li = document.createElement('li');

      li.textContent = item.value;
      div.appendChild(li);

      const delBtn = document.createElement('button');
      delBtn.textContent = 'delete';
      delBtn.setAttribute('class', 'delBtn');
      div.appendChild(delBtn);

      itemList.appendChild(div);

    }
  )

  const delBtns = document.querySelectorAll('.delBtn');
  delBtns.forEach(item => {
    item.addEventListener(
      'click', () => {
        const parentDiv = item.parentElement;
        const pid = parentDiv.getAttribute('id');
        todoList = todoList.filter(e => e.id != pid)

        render();
        // parentDiv.remove();
      }
    )
  }
  )
}

render();

function setLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function parseLocalStorage(string) {
  return JSON.parse(string);

}

function getLocalStorage() {
  if (!localStorage.getItem('todoList')) {
    localStorage.setItem('todoList', '[]');
  }
  return localStorage.getItem('todoList');
}

