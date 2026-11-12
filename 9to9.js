const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

// Add task function
function addTask() {

    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Create task text
    const span = document.createElement("span");

    span.textContent = taskValue;

    // Complete task
    span.addEventListener("click", function() {
        span.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    // Add elements
    li.appendChild(span);

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

// Button click event
addBtn.addEventListener("click", addTask);

// Enter key event
taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});