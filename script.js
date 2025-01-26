document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get task value from the input
    const taskValue = document.getElementById('task').value;
    
    // Create a task object
    const task = { text: taskValue };
    
    // Get existing tasks from localStorage, or initialize as an empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Add the new task to the list
    tasks.push(task);
    
    // Save the updated tasks list to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    // Display the tasks
    displayTasks();
    
    // Clear the input field
    document.getElementById('task').value = '';
  });
  
  function displayTasks() {
    // Get tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Get the div where tasks will be displayed
    const taskListDiv = document.getElementById('taskList');
    
    // Clear the current list
    taskListDiv.innerHTML = '';
    
    // Check if there are tasks to display
    if (tasks.length > 0) {
      tasks.forEach((task, index) => {
        // Create a div for each task
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
          <span>${task.text}</span>
          <button class="delete" onclick="deleteTask(${index})">Delete</button>
        `;
        taskListDiv.appendChild(taskDiv);
      });
    } else {
      taskListDiv.innerHTML = '<p>No tasks available</p>';
    }
  }
  
  // Function to delete a task
  function deleteTask(index) {
    // Get tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Remove the task by index
    tasks.splice(index, 1);
    
    // Save the updated tasks list to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    // Display the tasks after deletion
    displayTasks();
  }
  
  // Display tasks on page load
  window.onload = displayTasks;
  