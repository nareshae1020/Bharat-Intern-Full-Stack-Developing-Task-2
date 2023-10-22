document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");

    taskForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const taskInput = document.getElementById("task");
        const assigneeInput = document.getElementById("assignee");
        const emailInput = document.getElementById("email");
        const deadlineInput = document.getElementById("deadline");

        const task = taskInput.value;
        const assignee = assigneeInput.value;
        const email = emailInput.value;
        const deadline = deadlineInput.value;

        if (task.trim() !== "" && assignee.trim() !== "" && email.trim() !== "" && deadline.trim() !== "") {
            addTaskToList(task, assignee, email, deadline);
            taskInput.value = "";
            assigneeInput.value = "";
            emailInput.value = "";
            deadlineInput.value = "";
            window.alert("Task assigned. Email sent.");
        }
    });

    function addTaskToList(task, assignee, email, deadline) {
        const li = document.createElement("li");
        li.textContent = `Task: ${task} | Assignee: ${assignee} | Email: ${email} | Deadline: ${deadline}`;
        taskList.appendChild(li);
    }
});
