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

    //create li element
    const li = document.createElement('li');
    //add class
    li.className='collection-item';
    //create text node and append
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link
    const link = document.createElement('a');
    //add class
    link.className='delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link);
    //append li to ul
    taskList.appendChild(li);
}