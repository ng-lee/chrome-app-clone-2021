const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODO_KEY = "todo";
let toDos = [];

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    li.id = newToDoObj.id;
    span.innerText = newToDoObj.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    toDoList.appendChild(li);
}

function saveToDo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(item =>
        item.id !== parseInt(li.id));
    saveToDo();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };

    toDos.push(newToDoObj);
    saveToDo();

    paintToDo(newToDoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDo = localStorage.getItem(TODO_KEY);

if(saveToDo) {
    const parsedToDos = JSON.parse(savedToDo);
    toDos.parsedToDos;
    parsedToDos.forEach(paintToDo);
}
