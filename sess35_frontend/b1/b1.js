const form = document.getElementById("form");
const inputTask = document.getElementById("input");
const listTask = document.getElementById("todo-container");
let tasks = JSON.parse(localStorage.getItem("task")) || [
    {content: "Java"},
    {content: "C"},
    {content: "C++"},
    {content: "JavaScript"},
    {content: "Python"},
];
// Đọc
function renderTasks() {
    listTask.innerHTML = "";
    tasks.forEach((task, index) => {
        listTask.innerHTML += `
            <li>
                <span>${task.content}</span>
                <div class task-button>
                <button onclick = "editTask(${index})">Sửa</button>
                <button onclick = "removeTask(${index})">Xóa</button>
                </div>
            </li>
        `;
    });
}

form.addEventListener("submit", function (event) {
   event.preventDefault();
   
   const contentValue = inputTask.value.trim();

   if (contentValue === "") {
    alert("Tên công việc không được để trống");
    return;
   }
   tasks.push({content: contentValue});
   localStorage.setItem("tasks", JSON.stringify(tasks));
   renderTasks();
   form.reset();
});

// Xóa
function removeTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// Sửa
function editTask(index) {
    const newContent = prompt("Nhập tên nhiệm vụ mới", tasks[index].content);

    if (newContent) {
        tasks[index].content = newContent.trim();

        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    }
}
renderTasks();