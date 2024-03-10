const taskInput = document.getElementById('taskInput');
const taskTime = document.getElementById('taskTime');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  const taskTimeValue = taskTime.value;
  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    if (taskTimeValue !== '') {
      li.textContent += ' at ' + taskTimeValue;
    }
    taskList.appendChild(li);
    taskInput.value = '';
    taskTime.value = '';
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });
    li.insertAdjacentHTML('beforeend', '<span class="delete"> ❌ </span>');
    li.insertAdjacentHTML('beforeend', '<span class="reminder"> 🕒 </span>');
    li.querySelector('.delete').addEventListener('click', (e) => {
      e.stopPropagation();
      li.remove();
    });
    li.querySelector('.reminder').addEventListener('click', (e) => {
      e.stopPropagation();
      alert('Reminder set for: ' + taskText);
    });
  }
}
