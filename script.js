document.addEventListener('DOMContentLoaded', function() {
    // Select the necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Add tasks without saving them again to Local Storage
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        // Create a new list item (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Add an event listener to the remove button to delete the task
        removeButton.onclick = function() {
            taskList.removeChild(li); // Remove the list item (task) from the list
            removeTaskFromStorage(taskText); // Remove from Local Storage
        };

        // Append the remove button to the list item (li)
        li.appendChild(removeButton);

        // Append the list item (li) to the task list (ul)
        taskList.appendChild(li);

        // Save task to Local Storage if 'save' is true
        if (save) {
            saveTaskToStorage(taskText);
        }

        // Clear the input field after adding a task
        taskInput.value = "";
    }

    // Save task to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText); // Add the new task to the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save updated task array
    }

    // Remove task from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText); // Remove the task from the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Update Local Storage
    }

    // Event listener for the 'Add Task' button
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText); // Add task to the list and Local Storage
        } else {
            alert("Please enter a task.");
        }
    });

    // Event listener for the 'Enter' key in the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTask(taskText); // Add task to the list and Local Storage
            } else {
                alert("Please enter a task.");
            }
        }
    });

    // Load tasks from Local Storage when the page is loaded
    loadTasks();
});
