//define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const deleteBtn = document.querySelector('.fa fa-remove')

//Load all event listeners
loadEventListeners();

//load event listeners logic
function loadEventListeners(){
    //add task event
    form.addEventListener('submit', addTask);
    //remove task event
    taskList.addEventListener('click', removeTask);
    //clear task
    clearBtn.addEventListener('click', clearTasks);
}

//add task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task');
    }
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

    //clear input
    taskInput.value='';

    e.preventDefault();
}

//remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure?'))
    {e.target.parentNode.parentNode.remove();
        alert('Task Deleted');
    }
    }
}

//clear task
function clearTasks(e){
    console.log(taskList.firstChild)
  while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild)
  }
}