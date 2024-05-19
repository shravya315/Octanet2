function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
  
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button onclick="completeTask(this)">Complete</button>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
  
    input.value = '';
  }
  

  function completeTask(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
  }
  
  
  function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
  } 
   
  