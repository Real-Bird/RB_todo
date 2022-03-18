const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingUser = document.querySelector(".user");
const toDoTable = document.querySelector("#todo-form");
const toDoLi = document.querySelector("#todo-list");
const toDoSect = document.querySelector(".todos-container");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const logOutBtn = document.createElement("button");
logOutBtn.className = "logoutbtn";
logOutBtn.innerText = "Log Out";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeings(username);
}

function paintGreeings(username) {
  greetingUser.innerText = `Hello, ${username}!`;
  greetingUser.appendChild(logOutBtn);
  greetingUser.classList.remove(HIDDEN_CLASSNAME);
  toDoTable.classList.remove(HIDDEN_CLASSNAME);
  toDoLi.classList.remove(HIDDEN_CLASSNAME);
  toDoSect.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  toDoSect.classList.add(HIDDEN_CLASSNAME);
} else {
  paintGreeings(savedUsername);
}

logOutBtn.addEventListener("click", handleLogOut);

function handleLogOut() {
  localStorage.removeItem(USERNAME_KEY);
  greetingUser.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  toDoSect.classList.add(HIDDEN_CLASSNAME);
  loginInput.value = null;
  loginInput.focus();
}
