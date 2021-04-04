//SELECTORS
const buttonTodo = document.querySelector(".addTodo")
const todoInput = document.querySelector(".todo-input")
const todoList  = document.querySelector(".todo-list")

//EVENT LISTENERS
buttonTodo.addEventListener('click',addtodo);

//FUNCTIONS
function addtodo(event){
    event.preventDefault();
//Creating div for todo items
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")
///creating todo items
    const todoItems = document.createElement("li")
    todoItems.innerText = todoInput.value;
    todoItems.classList.add('todo-items')
    todoDiv.appendChild(todoItems);
    todoInput.value = "";
    todoList.appendChild(todoDiv)

}