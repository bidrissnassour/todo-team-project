document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    // Fonction pour créer une tâche
    function createTask(taskText) {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = taskText;

        // Bouton modifier
        const editBtn = document.createElement("button");
        editBtn.textContent = "✏️ Edit";
        editBtn.style.marginLeft = "10px";
        editBtn.addEventListener("click", () => {
            const newText = prompt("Modifier la tâche :", span.textContent);
            if (newText && newText.trim() !== "") {
                span.textContent = newText.trim();
            }
        });

        // Bouton supprimer
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌ Delete";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    // Ajouter une tâche
    addBtn.addEventListener("click", () => {
        const task = input.value.trim();
        if (task !== "") {
            createTask(task);
            input.value = "";
        }
    });
});
