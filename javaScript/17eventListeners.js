// event listeners ve event objesi
const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");
btn.addEventListener("click", btnClick);
btn2.addEventListener("click", btnClick);
function btnClick() {
    console.log("tiklandi");
}
;
