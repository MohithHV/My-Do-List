function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
  
      const taskItem = document.createElement('li');
      taskItem.className = 'task';
  
      const taskContent = document.createElement('span');
      taskContent.textContent = taskText;
  
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.onclick = () => {
        taskItem.classList.toggle('completed');
      };
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => {
        taskList.removeChild(taskItem);
      };
  
      taskItem.appendChild(taskContent);
      taskItem.appendChild(completeButton);
      taskItem.appendChild(deleteButton);
  
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
    }
  }