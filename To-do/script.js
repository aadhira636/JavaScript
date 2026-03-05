var todos = [
  { id: 1, text: "Finish homework" },
  { id: 2, text: "Practice JavaScript" },
  { id: 3, text: "Read a book" },
];

var nextId = 4;

var todoInput = document.getElementById("todoInput");
var addButton = document.getElementById("addButton");
var todoList = document.getElementById("todoList");

function showTodos() {
  todoList.innerHTML = "";

  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.className = "todo-item";

    var leftDiv = document.createElement("div");
    leftDiv.className = "todo-left";

    var idSpan = document.createElement("span");
    idSpan.className = "todo-id";
    idSpan.textContent = "#" + todo.id;

    var textSpan = document.createElement("span");
    textSpan.textContent = todo.text;

    leftDiv.appendChild(idSpan);
    leftDiv.appendChild(textSpan);
    li.appendChild(leftDiv);
    todoList.appendChild(li);
  }
}

// function to add todo
function addTodo() {
  var text = todoInput.value.trim();

  if (text === "") {
    return;
  }

  var newTodo = {
    id: nextId,
    text: text,
  };

  nextId = nextId + 1;
  todos.push(newTodo);
  todoInput.value = "";
  showTodos();
}

// events
addButton.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

showTodos();
