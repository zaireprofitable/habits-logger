// Build a console-based task logger that:
// 1. Allows adding tasks with timestamps
// 2. Stores tasks in localStorage
// 3. Can filter tasks by date
// 4. Uses async/await with setTimeout to simulate API calls
// Challenge Requirements:

// Use array methods (map, filter) to manage tasks
// Implement localStorage for data persistence
// Create async functions for simulated API calls
// Use modern JS syntax (arrow functions, destructuring)
// Handle basic error cases

// Success Metrics:

// Can add/remove tasks
// Data persists after page refresh
// Can filter tasks by date
// Proper error handling displayed to user

// This is like an empty box ready to hold many sticky notes
let tasks = [];  

// This is like reading from the notebook
const savedTasks = localStorage.getItem("tasks");
if (savedTasks) {
    tasks = JSON.parse(savedTasks);
};



const submitButton = document.getElementById("taskSubmit");
submitButton.addEventListener("click", () => {
    // Create a new task when the button is clicked
    const newTask = {
        id: generateId(),
        title: document.getElementById("taskInput").value,
        description: document.getElementById("taskDescription").value,
        completed: `false`,
        createdAt: new Date().toISOString()
    };

    // Add the new task to the tasks array
    tasks.push(newTask);

    // Copy what's on your paper into your magical notebook! 
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Clear the input fields
    document.getElementById("taskInput").value = "";
    document.getElementById("taskDescription").value = "";

    // Shows all tasks in the array
    console.log(tasks);
});

// This function creates a unique ID using the current timestamp plus a random number
const generateId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

const displayTasks = () => {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ''; // Clear the current list

    // Loop through each task in our tasks array
    tasks.forEach(task => {
        taskList.innerHTML += `
            <div class="task">
                <p>Task: ${task.title}</p>
                <p>Description: ${task.description}</p>
                <p>Created At: ${task.createdAt}</p>
            </div>
        `;
    });
}