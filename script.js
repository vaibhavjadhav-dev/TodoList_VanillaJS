document.getElementById('todoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get input values
    var todoName = document.getElementById('todoname').value.trim();
    var todoDescription = document.getElementById('descriptiontext').value.trim();

    // Create new todo list item for the todo
    var todoItem = document.createElement('li');
    todoItem.classList.add('list-group-item');
    todoItem.innerHTML = `<strong>${todoName}</strong>: ${todoDescription}`;

    // Append new todo item to list
    document.getElementById('todoList').appendChild(todoItem);

    // Clear input fields
    document.getElementById('todoname').value = "";
    document.getElementById('descriptiontext').value = "";

    // Hide the modal
    var modal = bootstrap.Modal.getInstance(document.getElementById('todoModal'));
    modal.hide();
});
