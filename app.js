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

function createDiv() {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("note");

  const todoLeft = document.createElement("div");
  todoLeft.classList.add("todo_left");

  const todoCb = document.createElement("input");
  todoCb.type = "checkbox";
  todoCb.classList.add("todo_cb");

  const todoText = document.createElement("span");
  todoText.classList.add("todo_text");
  todoText.textContent = input.value;

  const editInput = document.createElement("input");
  editInput.classList.add("todo_editInput");
  editInput.defaultValue = todoText.textContent;

  todoLeft.appendChild(todoCb);
  todoLeft.appendChild(todoText);
  todoLeft.appendChild(editInput);

  const todoRight = document.createElement("div");
  todoRight.classList.add("todo_right");

  const remove = document.createElement("i");
  remove.classList.add("far");
  remove.classList.add("fa-trash");
  remove.classList.add("todo_delete");
  remove.addEventListener("click", deleteTodo);

  const edit = document.createElement("i");
  edit.classList.add("far");
  edit.classList.add("fa-edit");
  edit.classList.add("todo_edit");
  edit.addEventListener("click", editTodo);

  const saveBtn = document.createElement("i");
  saveBtn.classList.add("far");
  saveBtn.classList.add("fa-save");
  saveBtn.classList.add("todo_save");
  saveBtn.addEventListener("click", saveTodo);

  todoRight.appendChild(remove);
  todoRight.appendChild(edit);
  todoRight.appendChild(saveBtn);

  todoDiv.appendChild(todoLeft);
  todoDiv.appendChild(todoRight);

  texts.appendChild(todoDiv);
}

const deleteTodo = (e) => {
  const todo = e.target.parentElement.parentElement;
  todo.remove();
};

const editTodo = (e) => {
  const todo = e.target.parentElement.parentElement;
  todo.classList.add("edited");
};

const saveTodo = (e, editInput) => {
  const todo = e.target.parentElement.parentElement;
  const newText = todo.firstChild.children[2].value;
  if (todo.firstChild.children[2].value === "") {
    editInput.style.border = "1px solid red";
    console.log("q");
    setTimeout(() => {
      editInput.style.border = "";
    }, 1500);
  } else {
    todo.firstChild.children[1].textContent = newText;
    todo.classList.remove("edited");
  }
};
