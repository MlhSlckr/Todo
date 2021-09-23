const input = document.querySelector(".input");
const add = document.querySelector(".add");
const edit = document.querySelector(".edit");
const texts = document.querySelector(".texts");
let deleteBtns;

let inputValue;
let isCompleted;

function createDiv() {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("note");

  const todoLeft = document.createElement("div");
  todoLeft.classList.add("todo_left");

  const todoCb = document.createElement("input");
  todoCb.type = "checkbox";
  todoCb.checked = isCompleted;
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

  const edit = document.createElement("i");
  edit.classList.add("far");
  edit.classList.add("fa-edit");
  edit.classList.add("todo_edit");

  todoRight.appendChild(remove);
  todoRight.appendChild(edit);

  todoDiv.appendChild(todoLeft);
  todoDiv.appendChild(todoRight);

  texts.appendChild(todoDiv);
}

add.addEventListener("click", () => {
  if (input.value === "") {
    input.style.border = "1px solid red";
    setTimeout(() => {
      input.style.border = "none";
    }, 1500);
  } else {
    createDiv();
    deleteBtns = document.querySelectorAll(".todo_delete");
  }
});

deleteBtns.forEach((btn) => btn.addEventListener("click", deleteTodo()));

const deleteTodo = (e) => {
  const todo = e.target.parentElement.parentElement;
  todo.remove();
  console.log("q");
};
