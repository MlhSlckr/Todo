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

  todoLeft.appendChild(todoCb);
  todoLeft.appendChild(todoText);

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

  todoRight.appendChild(remove);
  todoRight.appendChild(edit);

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
  const text = todo.firstChild.children[1].textContent;
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = text;
  editInput.classList.add("edit_input");
  document.querySelector(".todo_left").appendChild(editInput);
  document.querySelector(".todo_text").remove();
  document.querySelector(".todo_cb").remove();
  document.querySelector(".todo_delete").remove();
  document.querySelector(".todo_edit").remove();
  const saveBtn = document.createElement("i");
  saveBtn.classList.add("far");
  saveBtn.classList.add("fa-save");
  saveBtn.classList.add("save");
  document.querySelector(".todo_right").appendChild(saveBtn);
  saveBtn.addEventListener("click", save);
};

const save = (e) => {
  const newText = document.querySelector(".edit_input").value;
  if (document.querySelector(".edit_input").value === "") {
    document.querySelector(".edit_input").style.border = "1px solid red";
  } else {
    const todoCb = document.createElement("input");
    todoCb.type = "checkbox";
    todoCb.classList.add("todo_cb");

    const todoText = document.createElement("span");
    todoText.classList.add("todo_text");

    document.querySelector(".todo_left").appendChild(todoCb);
    document.querySelector(".todo_left").appendChild(todoText);

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

    document.querySelector(".todo_right").appendChild(remove);
    document.querySelector(".todo_right").appendChild(edit);

    document.querySelector(".save").remove();
    document.querySelector(".edit_input").remove();
    todoText.textContent = newText;
  }
};
