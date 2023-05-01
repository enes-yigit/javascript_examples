let value;
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
value = todoList;
value = todo;
//child nodes
value = todoList.childNodes;
value = todoList.children;
value = todoList.children[1];
value = todoList.children[1].textContent = "merhaba";
value = todoList.firstElementChild;
value = todoList.children.length;
console.log(value);
