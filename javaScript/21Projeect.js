// Todo Eleman Ekleme
//eleman seçimi
const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
//const items = ["todo1", "todo 2", "todo 3", "todo 4"];
let todos;
loadItems();
eventListeners();
function eventListeners() {
    //submit
    form.addEventListener("submit", addNewItem);
    //delete
    taskList.addEventListener("click", deleteItem);
    //delete All
    btnDeleteAll.addEventListener("click", deleteAllItems);
}
//load items
function loadItems() {
    todos = getItemsFromLS();

    todos.forEach(function (item) {
        createItem(item);
    });
}
//get items from local storage
function getItemsFromLS() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
//set item to local storage
function setItemsToLS(newTodo) {
    todos = getItemsFromLS();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
//create item
function createItem(newTodo) {

    //li oluşturma
    const li = document.createElement("li");
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(newTodo));

    //a oluşturma
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    //birleştirme
    li.appendChild(a);
    taskList.appendChild(li);
}
function addNewItem(e) {
    if (input.value === "") {
        // alert("add new item!")
        // console.log("submit");
    }
    //create new item
    createItem(input.value);
    setItemsToLS(input.value);
    input.value = "";
    e.preventDefault();
}
//eleman silme
function deleteItem(e) {


    if (e.target.className === "fas fa-times") {
        if (confirm("Silmek istediğinize emin misiniz?")) {
            e.target.parentElement.parentElement.remove();
            deleteItemsTodoFromStorage(e.target.parentElement.parentElement.textContent);
        }

    }

    e.preventDefault();
}
function deleteItemsTodoFromStorage(deleteTodo) {
    let todos = getItemsFromLS();

    todos.forEach(function (todo, index) {
        if (todo === deleteTodo) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}
//tüm elemanları silme
function deleteAllItems(e) {
    if (confirm("Tüm elemanlari sileceksiniz!")) {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }

    //bu ornege özel
    // taskList.innerHTML="";
}
