document.addEventListener('DOMContentLoaded', function() {
    // Select the necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Get and trim the value from the task input
        const taskText = taskInput.value.trim();

        // Check if taskText is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Stop execution if input is empty
        }

        // Create a new list item (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add an event listener to the remove button to delete the task
        removeButton.onclick = function() {
            taskList.removeChild(li); // Remove the list item (task) from the list
        };

        // Append the remove button to the list item (li)
        li.appendChild(removeButton);

        // Append the list item (li) to the task list (ul)
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Event listener for the 'Add Task' button
    addButton.addEventListener('click', addTask);

    // Event listener for the 'Enter' key in the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Call the addTask function when 'Enter' key is pressed
        }
    });
});
