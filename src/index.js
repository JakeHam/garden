const todoListOne = [
  { text: 'plant peas', completed: false }
];

const todoListTwo = [
  { text: 'till soil', completed: false },
  { text: 'set trellises', completed: false }
];

const todoLists = [{
  id: 'random-id',
  name: 'Seed planting',
  items: todoListOne
}, {
  id: 'random-id-2',
  name: 'Garden prep',
  items: todoListTwo
}]

let currentList = localStorage.getItem('currentList') || todoLists[0];

function updateCurrentList (newList) {
  const currentListNameEle = document.querySelector('#current-list-name');
  if (!newList) {
    currentList = localStorage.getItem('currentList') || todoLists[0];
  } else {
    currentList = newList;
  }

  currentListNameEle.innerText = currentList.name;
}

function init () {
  // Set header
  updateCurrentList();

  // Populate Select
  const todoListSelectEle = document.querySelector('#todo-list-select');
  todoLists.forEach(todoList => {
    const listOption = document.createElement('option');
    listOption.id = todoList.id;
    listOption.value = todoList.name;
    listOption.innerText = todoList.name;

    todoListSelectEle.appendChild(listOption);
  });
  todoListSelectEle.addEventListener('change', (e) => {
    const newList = todoLists.find(list => list.name === e.target.value);
    updateCurrentList(newList);
  });

  // Set Todo Items
  const todoItemsEle = document.querySelector('#todo-items');
  // currentList
}

init();
