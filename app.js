//SELECTORS
const buttonTodo = document.querySelector(".addTodo")
const todoInput = document.querySelector(".todo-input")
const todoList  = document.querySelector(".todo-list")

//EVENT LISTENERS
buttonTodo.addEventListener('click',addtodo);
todoList.addEventListener('click', audit);
//FUNCTIONS
function addtodo(event){
    event.preventDefault();
//Creating div for todo items
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")
///creating todo items
    
    const todoItems = document.createElement("li")
    todoItems.innerText = todoInput.value;
//AVOIDING EMPTY INPUTS
    if(todoInput.value === ''){
        alert(`Invalid value!!!`);
    }
    else{
    todoItems.classList.add('todo-items')
    todoDiv.appendChild(todoItems);
    todoInput.value = "";
    todoList.appendChild(todoDiv)
///DONE BUTTON
    const doneButton = document.createElement("button")
    doneButton.classList.add('doneButton')
    doneButton.innerHTML = '<i class="fas fa-check"></i>'
    todoDiv.appendChild(doneButton);
/// TRASH BUTTON
    const trashButton = document.createElement("button")
    trashButton.classList.add('trashButton')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    todoDiv.appendChild(trashButton);
}
}
///DELETE or FINISHED FUNCTION 
    function audit(ev){
        const item = ev.target;
        if(item.classList[0] === 'trashButton'){
            item.parentElement.classList.add("trashed");
            item.parentElement.addEventListener("transitionend",function(){
                item.parentElement.remove();
            })
        }

        if(item.classList[0] === 'doneButton'){
            const finished = item.parentElement;
            finished.classList.add('finished')
            alert(`Congratulations you finished it!!!`)
        }
    }