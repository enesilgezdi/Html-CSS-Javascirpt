const form = document.querySelector("#form")
const input = document.querySelector("#input")
const button = document.querySelector("#button")
const filtre = document.querySelector("#filtre")
const list = document.querySelector("#list")
const allClear = document.querySelector("#allClear")
const alertDOM = document.querySelector("#alertDOM")
let todos;

eventListeners()

function eventListeners () {
    form.addEventListener("submit", newList)
    allClear.addEventListener("click", deleteALL)
    document.addEventListener("DOMContentLoaded", displayLocalStorage)
    list.addEventListener("click", deleteitem)
    filtre.addEventListener("keyup", filterTodos)
}

const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

const alertFunction2 = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function displayLocalStorage(){
    todos = getLocalStorage()
    todos.forEach(item =>{
        creatList(item)
    })
}

function newList(e){
    if(input.value){
        creatList(input.value)
        setLocalStorage(input.value)
        input.value =""    
        alertDOM.innerHTML = alertFunction2(
            "To do list'e",
            "başarılı giris",
            "success"
        )
    }else{
        alertDOM.innerHTML = alertFunction(
            "to do list'e",
            "Eksik bilgi girdiniz",
            "dark"
        )
    }

    e.preventDefault()
}

const creatList = (newtodo) =>{
    let liDOM = document.createElement("li")
    liDOM.className = "list-group-item"
    liDOM.innerHTML= newtodo

    let link = document.createElement("span")
    link.classList = "delete-item float-end";
    link.setAttribute("href", "#")
    link.innerHTML = '<i class="fa-solid fa-xmark"></i>'
 

    liDOM.append(link)

    list.append(liDOM)

    
}

function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(listItem =>{
        const text = listItem.textContent.toLocaleLowerCase();
        if(text.indexOf(filterValue) === -1){
            //bulamadı
            listItem.setAttribute("style", "display: none !important")
        }else{
            listItem.setAttribute("style", "display: block")
        }
    })
}



function deleteitem(e){
    if(e.target.className === "fa-solid fa-xmark"){
        if(confirm("silmek istediğinize emin misinz?")){
            e.target.parentElement.parentElement.remove()
            deleteLocalStorage(e.target.parentElement.parentElement.textContent);
        }
    }
    e.preventDefault()
}

function getLocalStorage(){
    if(localStorage.getItem("todos") === null){
        todos = []
    }else{
       todos =  JSON.parse(localStorage.getItem("todos"))
    }
    return todos;
}

function setLocalStorage(todo){
    todos = getLocalStorage()
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function deleteLocalStorage (deleteLS){
    todos = getLocalStorage()
    todos.forEach(function(todo, index){
        if(todo === deleteLS){
            todos.splice(index, 1)
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos))
}

function deleteALL () {
    if(confirm("tümünü silmek istediğinize emin misinz?")){
        list.innerHTML = ""
    }
}
