const input = document.querySelector(".input");
const add = document.querySelector(".add");
const texts = document.querySelector(".texts");

let removeBtns;
let inputValue;
let isCompleted;

add.addEventListener("click", () => {
  if (input.value === "") {
    input.style.border = "1px solid red";
    setTimeout(() => {
      input.style.border = "none";
    }, 1500);
  } else {
    createDiv();
    input.value = "";
  }
});

const createDiv = () => {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("note");

  const todoLeft = document.createElement("div");
  todoLeft.classList.add("todo_left");

  const todoRight = document.createElement("div");
  todoRight.classList.add("todo_right");

  const todoText = document.createElement("span");
  todoText.classList.add("todo_text");
  todoText.textContent = input.value;

  const todoCb = document.createElement("input");
  todoCb.classList.add("todo_cb");
  todoCb.type = "checkbox";
  todoCb.addEventListener("click", completed);

  const editInput = document.createElement("input");
  editInput.classList.add("todo_editInput");
  editInput.defaultValue = input.value;

  const deleteBtn = document.createElement("i");
  deleteBtn.classList.add("far");
  deleteBtn.classList.add("fa-trash");
  deleteBtn.classList.add("todo_delete");
  deleteBtn.addEventListener("click", deleteTodo);

  const saveBtn = document.createElement("i");
  saveBtn.classList.add("far");
  saveBtn.classList.add("fa-save");
  saveBtn.classList.add("todo_save");
  saveBtn.addEventListener("click", save);

  const editBtn = document.createElement("i");
  editBtn.classList.add("far");
  editBtn.classList.add("fa-edit");
  editBtn.classList.add("todo_edit");
  editBtn.addEventListener("click", edit);

  todoLeft.appendChild(todoCb);
  todoLeft.appendChild(todoText);
  todoLeft.appendChild(editInput);

  todoRight.appendChild(deleteBtn);
  todoRight.appendChild(editBtn);
  todoRight.appendChild(saveBtn);

  todoDiv.appendChild(todoLeft);
  todoDiv.appendChild(todoRight);

  texts.appendChild(todoDiv);
};

const deleteTodo = (e) => {
  const todo = e.target.parentElement.parentElement;
  todo.remove();
};

const edit = (e) => {
  const todo = e.target.parentElement.parentElement;
  todo.classList.add("edited");
};

const save = (e) => {
  const todo = e.target.parentElement.parentElement;
  const newText = todo.firstChild.children[2].value;
  todo.firstChild.children[1].textContent = newText;
  todo.classList.remove("edited");
};

const completed = (e) => {
  const todo = e.target.parentElement.parentElement;
  todo.classList.toggle("completed");
};
