//Element Silme
const taskList = document.querySelector("#task-list");
//taskList.remove();
//taskList.children[2].remove();
//attribute Silme
//taskList.children[1].removeAttribute("class");
for (let i = 0; i < taskList.children.length; i++) {
    taskList.children[i].removeAttribute("class");
}
console.log(taskList);
