//kosullu durumlar(if-else)
const firstName = 'Anakin';
const lastName = 'Skaywalker';
const age = 20;
const userName = 'jediProject';
const isStudent = false;
const school = 'life';
if (userName == "jediProject") {
    console.log("let's begin");
} else {
    console.log('f*ck off men');
}
if (isStudent) {
    console.log('kole misin?');
} else {
    console.log('where is your lightsaber?');
}
if (age >= 18) {
    if (school == 'life') {
        console.log('you can use lightsaber');
    } else {
        console.log('finis the life school!');
    }
} else {
    console.log('leave little man');
}
let id = 213123;
if (typeof id != "undefined") {
    console.log('id = ' + id);
} else {
    console.log('no id');
}
