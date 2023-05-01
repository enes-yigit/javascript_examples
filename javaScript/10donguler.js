let citys = ['ankara', 'izmir', 'istanbul', 'eskisehir'];
let users = [
    { firstName: 'enes', lastName: 'yigit' },
    { firstName: 'sevval', lastName: 'yigit' },
    { firstName: 'fatih', lastName: 'boken' },
    { firstName: 'emin', lastName: 'kaya' },
];
// for(let i=0;i<citys.length;i++){
//     console.log(citys[i]);
// }
// //for-in
// for (let i in citys){
//     console.log('index: '+ i+' ' +'value: '+citys[i])
// }
// citys.forEach(function(item){
//     console.log(item);
// });
for (let i = 0; i < users.length; i++) {
    console.log(users[i].firstName);
}
//map: returns arrray
let veri = users.map(function (item) {
    return item.firstName + ' ' + item.lastName;
});
console.log(veri);
let numbers = [1, 2, 3, 4, 5, 6];
let num = numbers.map(function (n) {
    return n * n;
});
console.log(num);
