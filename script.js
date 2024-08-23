document.getElementById('saveTodoButton')
    .addEventListener('click', function () {
        //get input value
        var todoName = document.getElementById('todoname').value;
        var todoDescription = document.getElementById('descriptiontext').value;

        //create new todo list item for the todo
        var todoItem = document.createElement('li');
        todoItem.classList.add('list-group-item');
        todoItem.innerHTML = `<strong>${todoName}</strong>: ${todoDescription}`;


        //append new todo item to list
        document.getElementById('todoList').appendChild(todoItem)

        //clear input field
        document.getElementById('todoname').value="";
        document.getElementById('descriptiontext').value="";

        // Hide the modal
        var modal = bootstrap.Modal.getInstance(document.getElementById('todoModal'));
        modal.hide();

        //clearing input fiels
        // document.getElementById('clearFieldsButton')
        //     .addEventListener('click', function () {
        //         document.getElementById('todoname').value="";
        //         document.getElementById('descriptiontext').value="";
        //     });
    })