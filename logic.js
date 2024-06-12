// Retrieve DOM elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add a new task to the list
function addTask() {
    if(inputBox.value === ''){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData(); // Save the updated task list
}

// Event listener for task completion and deletion
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData(); // Save the updated task list
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save the updated task list
    }
}, false);

// Save the current task list to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Display the task list from localStorage
function showTask() {
    const savedData = localStorage.getItem("data");
    console.log("Saved data:", savedData);
    listContainer.innerHTML = savedData || '';
}

// Show the task list on page load
showTask();
