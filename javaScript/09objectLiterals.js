//Object Literals
let veri;
let user = {
    firstName: 'enes',
    lastName: 'yigit',
    age: 19,
    hobbies: ['spor', 'yazilim', 'lol'],
    address: {
        city: 'izmir',
        country: 'tr',
        phone: 054331212,
    }
};
veri = user;
veri = user.age;
console.log(veri);
console.log(typeof user);
