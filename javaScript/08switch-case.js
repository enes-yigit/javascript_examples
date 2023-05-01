//switch yapisi
//let islem = 5;
// switch (islem) {
//     case 1:
//         console.log('1. islemi sectiniz..')
//         break;
//     case 2:
//         console.log('2. islemi sectiniz..')
//         break;
//     case 3:
//         console.log('3. islemi sectiniz..')
//         break; 
//     default:
//      console.log('islem secemdiniz!')
// }
// let day;
// switch (new Date().getDay()) {
//     case 0:
//         day = 'pazar';
//         break
//     case 1:
//         day = 'pazartesi';
//         break
//     case 2:
//         day = 'sali';
//         break
//     case 3:
//         day = 'carsamba';
//         break
//     case 4:
//         day = 'persembe';
//         break
//     case 5:
//         day = 'cuma';
//         break
//     case 6:
//         day = 'cumartesi';
//         break
// }
// console.log(day)
let hour = new Date().getHours();
switch (true) {
    case (hour >= 23 && hour < 04):
        alert("iyi geceler");
        break;
    case (hour >= 04 && hour <= 12):
        alert("hayirli sabahlar");
        break;
    case (hour > 12 && hour < 23):
        alert("iyi gunler :)");
        break;
}
