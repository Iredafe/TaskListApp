//define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//Load all event listeners
loadEventListeners();

//load event listeners
function loadEventListeners(){
    //add task event
    form.addEventListener('submit', addTask)
}

//add task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task');
    }

    e.preventDefault();
}