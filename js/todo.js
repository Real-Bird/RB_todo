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
  chBox.class = "chbox";
  chBox.type = "checkbox";
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.className = "delBtn";
  btn.addEventListener("click", deleteToDo);
  chBox.id = `${li.id}`;
  chBoxLabel.htmlFor = `${li.id}`;
  li.appendChild(chBox);
  li.appendChild(chBoxLabel);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
  toDoList.scrollTop = toDoList.scrollHeight;
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

// function sayHello(item){
//     console.log("this is the turn of", item);
// } // == (item) => console.log("this is the turn of", item);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

// function sexyFilter(item){
//     return item !== 3;
// }

// console.log([1, 2, 3, 4].filter(sexyFilter));
