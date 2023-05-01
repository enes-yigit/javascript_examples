const btn = document.querySelector("#btnAddNewTask");
const ul = document.querySelector("#task-list");
//click event
//btn.addEventListener("click",run);
//double click event
//ul.addEventListener("dblclick",run);
//mouse up/down event
btn.addEventListener("mousedown", run);
btn.addEventListener("mouseup", run);
//mouse enter/leave
btn.addEventListener("mouseenter", run);
btn.addEventListener("mouseleave", run);
//mouse over/out
//mouse move
function run(event) {
    console.log(`event type: ${event.type} `);
}
;
