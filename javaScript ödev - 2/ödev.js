const input = document.querySelector("#task")
const button = document.querySelector("#liveToastBtn")
const list = document.querySelector("#list")
let alert = document.querySelector("#liveToast")



// Events

button.addEventListener("click", newList);
document.addEventListener("DOMContentLoaded", displayLocalStorage());

// Function

function newList () {
    if(input.value){
        createList(input.value)
        setLocalStorage(input.value)
        input.value = ""
    }else{
        $(".error").toast("show")
    }
}

function createList (todo){
    const liDOM = document.createElement("li")
    liDOM.innerHTML = todo
    list.appendChild(liDOM)


    const closeBtn = document.createElement("span")
    closeBtn.classList.add("close")
    closeBtn.textContent = "\u00D7"
    liDOM.append(closeBtn)

    closeBtn.onclick = remevoList
    $(".success").toast("show")
    liDOM.onclick = finishTodo;
}

function remevoList () {
    this.parentElement.remove()
    deleteLocalStorage(this.previousSibling.textContent)
}

function finishTodo() {
    this.classList.toggle("checked")
}

function getLocalStorage(){
    let todo;
    if(localStorage.getItem("todos") === null){
        todo = []
    }else {
        todo = JSON.parse(localStorage.getItem("todos"))
    }
    return todo ;
}

function displayLocalStorage() {
    const todos = getLocalStorage()
    todos.forEach(todo => {
        createList(todo)
    });
}

function setLocalStorage(todo){
    let todos = getLocalStorage()
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function deleteLocalStorage(text){
    let todos = getLocalStorage()
    todos.forEach((todo, index) => {
        if(todo === text){
            todos.splice(index, 1)
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos))
}