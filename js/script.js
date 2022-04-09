'use strict'
//Задание 1

for (let i = 10; i < 51; i += 2) {
   console.log(i);
}

// Задание 2
const mess = {
   name: 'Irina',
   surname: 'Ivanova',
   age: 20,
   animals: true
}
console.log(mess);

// Задание 3
// const array = [
//    'я в Симбирск,',
//    'в трактире.',
//    'с утра',
//    'В ту же ночь',
//    'Я остановился',
//    'для закупки',
//    'что и было поручено Савельичу.',
//    'приехал,',
//    'где должен был',
//    'нужных вещей',
//    'отправился по лавкам',
//    'пробыть сутки',
//    'Савельич'
// ]

// Задание 4

const fullName = function (firstName = 'Irina', lastName = 'Ivanova') {
   console.log(`${firstName} ${lastName}`)
}
fullName()


//Задание 5

let i = 21;
while (i < 68) {
   console.log(i)
   i += 2
}







