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
let array = [
   'я в Симбирск,',
   'в трактире.',
   'с утра',
   'В ту же ночь',
   'Я остановился',
   'для закупки',
   'что и было поручено Савельичу.',
   'приехал,',
   'где должен был',
   'нужных вещей',
   'отправился по лавкам',
   'пробыть сутки',
   'Савельич'
]


array[0] = 'В ту же ночь',
   array[1] = 'приехал,',
   array[2] = 'я в Симбирск,',
   array[3] = 'где должен был',
   array[4] = 'пробыть сутки',
   array[5] = 'для закупки',
   array[6] = 'нужных вещей',
   array[7] = 'что и было поручено Савельичу.',
   array[8] = 'Я остановился',
   array[9] = 'в трактире.',
   array[10] = 'Савельич',
   array[11] = 'с утра',
   array[12] = 'отправился по лавкам',
   console.log(array)


let result = array[0] + 'В ту же ночь'
   + array[1] + ' приехал'
   + array[2] + 'я в Симбирск,'
   + array[3] + 'где должен был'
   + array[4] + 'пробыть сутки'
   + array[5] + 'для закупки'
   + array[6] + 'нужных вещей'
   + array[7] + 'что и было поручено Савельичу.'
   + array[8] + 'Я остановился'
   + array[9] + 'в трактире.'
   + array[10] + 'Савельич'
   + array[11] + 'с утра'
   + array[12] + 'отправился по лавкам'
console.log(result)

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







