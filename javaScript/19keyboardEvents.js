//Keyboard Eventleri
const text = document.getElementById("txtTaskName");
//focus-blur
text.addEventListener("focus", run);
text.addEventListener("blur", run);
//copy-paste-cut
//keydown-keyup
text.addEventListener("keyup", run);
function run(e) {
    console.log(e.type);
    console.log(e.target.value);
}
;
