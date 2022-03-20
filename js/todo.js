const toDoDiv = document.querySelector(".todo-sect");
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
toDoDiv.appendChild(toDoList);
const TODOS_KEY = "todos";
const CANCLE = "cancle";

let toDos = [];

if (localStorage.getItem(USERNAME_KEY) == null) {
  toDoForm.classList.add(HIDDEN_CLASSNAME);
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
function paintToDo(newTodo) {
  const chBox = document.createElement("input");
  const chBoxLabel = document.createElement("label");
  chBox.className = "chbox";
  chBox.type = "checkbox";
  const li = document.createElement("li");
  li.id = newTodo.id;
  const todoText = document.createElement("div");

  todoText.className = "todo_text";

  todoText.innerText = newTodo.text;

  const zoomInBox = document.createElement("input");
  const zoomInBoxLabel = document.createElement("label");
  zoomInBox.className = "zoominbox";
  zoomInBox.type = "checkbox";
  const delBox = document.createElement("input");
  const delBoxLabel = document.createElement("label");
  delBox.class = "delbox";
  delBox.type = "button";

  chBox.id = `${li.id}`;
  chBoxLabel.htmlFor = `${li.id}`;
  delBox.id = `${li.id}del`;
  delBoxLabel.htmlFor = `${li.id}del`;
  zoomInBox.id = `${li.id}zoom`;
  zoomInBoxLabel.htmlFor = `${li.id}zoom`;
  li.appendChild(chBox);
  li.appendChild(chBoxLabel);
  li.appendChild(todoText);
  li.appendChild(zoomInBox);
  li.appendChild(zoomInBoxLabel);
  li.appendChild(delBox);
  li.appendChild(delBoxLabel);
  toDoList.appendChild(li);
  toDoList.scrollTop = toDoList.scrollHeight;

  zoomInBoxLabel.onclick = function () {
    const todoText2 = document.createElement("div");
    const todoText2Close = document.createElement("button");
    todoText2Close.innerText = "❌";
    todoText2.className = "hover_box";
    todoText2.innerText = newTodo.text;
    toDoDiv.appendChild(todoText2);
    toDoDiv.appendChild(todoText2Close);
    todoText2.style.display = "block";
    toDoList.style.opacity = "0.3";
    todoText2Close.onclick = function () {
      todoText2.style.display = "none";
      toDoList.style.opacity = "1";
      toDoDiv.removeChild(todoText2);
      toDoDiv.removeChild(todoText2Close);
    };
  };
  chBoxLabel.onclick = function () {
    const cancleLi = document.getElementById(`${li.id}`);
    cancleLi.classList.toggle(CANCLE);
    chBoxLabel.classList.toggle("checked");
    if (chBoxLabel.className === "checked") {
      chBox.checked = true;
    } else {
      chBox.checked = false;
    }
  };
  delBoxLabel.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
