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
    //dom lad event
    document.addEventListener('DOMContentLoaded', getTasks)
    //add task event
    form.addEventListener('submit', addTask);
    //remove task event
    taskList.addEventListener('click', removeTask);
    //clear task
    clearBtn.addEventListener('click', clearTasks);
    //filter tasks
    filter.addEventListener('keyup', filterTasks);
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

    //store in local storage
    storeTaskInLocalStorage(taskInput.value);
    //clear input
    taskInput.value='';

    e.preventDefault();
}

//store task in LS
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];

    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}
//remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure?'))
    {e.target.parentElement.parentElement.remove();
        alert('Task Deleted');
    }
    //remove from LS
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
}

//remove task from LS
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];

    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });
    
    }


 
//clear task
function clearTasks(e){
    console.log(taskList.firstChild)
  while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild)
  }

  clearTasksFromLocalStorage();
}

//clear tasks from local storage
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

//get tasks from Local storage
function getTasks(e){
let tasks;
if(localStorage.getItem('tasks') === null){
    tasks = [];
}else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
}
tasks.forEach(function(task){
        //create li element
        const li = document.createElement('li');
        //add class
        li.className='collection-item';
        //create text node and append
        li.appendChild(document.createTextNode(task));
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

})
}
//filter task
function filterTasks(e){

    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display='none';
        }
    });


}