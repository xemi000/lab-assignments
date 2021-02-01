// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button
const ascendBtn = document.querySelector('#ascending');
const descendBtn = document.querySelector('#descending');
const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 

// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);
// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);
//   Filter Task 
filter.addEventListener('keyup', filterTasks);
// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);
// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

//ascend
ascendBtn.addEventListener('click', ascend);
//desend
descendBtn.addEventListener('click', descend);

// Change the color of reload icon
reloadIcon.style.color = 'white';




// Add New  Task Function definition 
function addNewTask(e) {

    e.preventDefault(); //disable form submission


    // Check empty entry
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";

        return;
    }

    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to UL 
    taskList.appendChild(li);




}





// Clear Task Function definition 
function clearAllTasks() {

    //This is the first way 
    // taskList.innerHTML = '';

    //  Second Wy 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}



// Filter tasks function definition 
function filterTasks(e) {

    /*  
    Instruction for Handling the Search/filter 
    
    1. Receive the user input from the text input 
    2. Assign it to a variable so the us can reuse it 
    3. Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
    4. Iterate over the collection item Node List using forEach
    5. On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
    6 . If it contains , change the display content of the element as block , else none
    
    
    */
   let searcher = filter.value.toUpperCase();
   const searching = document.querySelectorAll('.collection-item');
   searching.forEach((val) => {
     if (val.textContent.toUpperCase().indexOf(searcher) > -1) {
       val.style.display = 'block';
     } else if (val.textContent.toUpperCase() != searcher) {
       val.style.display = 'none';
     }
     if (searcher == '') {
       searching.forEach((val) => {
         val.style.display = 'block';
       });
     }
   });
}

// Remove Task function definition 
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();

        }

    }
}


// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}

function ascend(e) {
    if (sorted) {
      return;
    }
    const searchRes = document.querySelectorAll('.collection-item');
  }
  function descend(e) {
    if (sorted == false) {
      return;
    }
    const searching = document.querySelectorAll('.collection-item');
    
    // var arr = searchRes.forEach((val) => {
    //   return val.textContent || val.innerHTML;
    // });
    var arr = Array();
    searching.forEach((val) => {
      arr.push(val.innerHTML);
    });
    arr.reverse();
  
    searching.forEach((val, index) => {
      val.innerHTML = arr[index];
    });
    sorted = false;}