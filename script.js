<<<<<<< HEAD
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function() {
  const text = taskInput.value.trim();
  if (text === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task-text">${text}</span>
    <div class="buttons">
      <button class="done-btn">✅ Terminer</button>
      <button class="delete-btn">🗑️ Supprimer</button>
    </div>
  `;

  li.querySelector('.done-btn').addEventListener('click', () => {
    li.classList.toggle('done');
  });

  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = '';
});
=======

>>>>>>> 34c4fc405c46516ae1c062fea347488a32c7f2c3
