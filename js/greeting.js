const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function handleLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function handleLogoutSubmit() {
    localStorage.removeItem(USERNAME_KEY);
    location.reload();
}

function paintGreetings(username) {
    const paintUsername = greeting.querySelector("h1");
    greeting.classList.remove(HIDDEN_CLASS);
    paintUsername.innerText = `Welcome ${username}`;
    greeting.addEventListener("click", handleLogoutSubmit);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername !== null) {
    paintGreetings(savedUsername);
} else {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", handleLoginSubmit);
}
