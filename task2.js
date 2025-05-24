document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("formMsg").textContent = "✅ Form submitted successfully!";
    this.reset();
  } else {
    document.getElementById("formMsg").textContent = "⚠️ Please fill out all fields.";
  }
});

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task !== "") {
    const li = document.createElement("li");
    li.textContent = task;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "✖";
    removeBtn.style.marginLeft = "1rem";
    removeBtn.style.background = "none";
    removeBtn.style.border = "none";
    removeBtn.style.color = "#dc2626";
    removeBtn.style.cursor = "pointer";
    removeBtn.style.fontSize = "1.1rem";

    removeBtn.addEventListener("click", () => li.remove());

    li.appendChild(removeBtn);
    todoList.appendChild(li);
    todoInput.value = "";
  }
});