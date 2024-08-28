document.getElementById('todoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    var todoName = document.getElementById('todoname').value.trim();
    var todoDescription = document.getElementById('descriptiontext').value.trim();

    if (document.getElementById('saveTodoButton').getAttribute('data-editing') === 'true') {
        // Editing an existing todo
        var todoIndex = document.getElementById('saveTodoButton').getAttribute('data-todo-index');
        updateTodo(todoIndex, todoName, todoDescription);
    } else {
        // Adding a new todo
        addTodo(todoName, todoDescription);
    }

    clearForm();
    hideModal();
});

function addTodo(name, description) {
    var todoItem = document.createElement('li');
    todoItem.classList.add('list-group-item');
    todoItem.innerHTML = `
        <div class="todo-content">
            <strong class="todo-name">${name}</strong>: <span class="todo-description">${description}</span>
        </div>
        <button class="btn btn-sm btn-danger float-end ms-2" onclick="deleteTodoItem(this)">Delete</button>
        <button class="btn btn-sm btn-secondary float-end" onclick="editTodoItem(this)">Edit</button>
    `;

    document.getElementById('todoList').appendChild(todoItem);
}

function editTodoItem(button) {
    var todoItem = button.parentElement;
    var todoName = todoItem.querySelector('.todo-name').innerText;
    var todoDescription = todoItem.querySelector('.todo-description').innerText;

    document.getElementById('todoname').value = todoName;
    document.getElementById('descriptiontext').value = todoDescription;
    document.getElementById('saveTodoButton').setAttribute('data-editing', 'true');
    document.getElementById('saveTodoButton').setAttribute('data-todo-index', Array.from(todoItem.parentElement.children).indexOf(todoItem));

    var modal = new bootstrap.Modal(document.getElementById('todoModal'));
    modal.show();
}

function updateTodo(index, name, description) {
    var todoList = document.getElementById('todoList').children;
    var todoItem = todoList[index];
    todoItem.innerHTML = `
       <div class="todo-content">
            <strong class="todo-name">${name}</strong>: <span class="todo-description">${description}</span>
        </div>
        <button class="btn btn-sm btn-danger float-end ms-2" onclick="deleteTodoItem(this)">Delete</button>
        <button class="btn btn-sm btn-secondary float-end" onclick="editTodoItem(this)">Edit</button>
    `;
}

function deleteTodoItem(button) {
    var todoItem = button.parentElement;  // Get the parent <li> element of the button
    todoItem.remove();  // Remove the <li> element from the DOM
}

function clearForm() {
    document.getElementById('todoname').value = "";
    document.getElementById('descriptiontext').value = "";
    document.getElementById('saveTodoButton').removeAttribute('data-editing');
    document.getElementById('saveTodoButton').removeAttribute('data-todo-index');
}

function hideModal() {
    var modal = bootstrap.Modal.getInstance(document.getElementById('todoModal'));
    modal.hide();
}
