// Ensure the script runs after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task to the list
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        // Check if taskText is not empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new <li> element
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add click event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(taskItem); // Remove the task from the list
        };

        // Append the remove button to the task item
        taskItem.appendChild(removeButton);

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add click event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add keypress event listener for the Enter key on the task input
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask when Enter key is pressed
        }
    });
});
