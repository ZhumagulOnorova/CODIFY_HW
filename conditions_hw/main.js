// 1 Задание
let year = 2023
if(year>2015){
    alert(year)
}

// Задание 2
let a =10
let b =10
let result = a- b
if(result){
    alert(result)
}
// result && alert(result)

// Задание 3

let question = prompt('Какое «официальное» название JavaScript?')
if (question === 'ECMAScript'){
    alert('Верно!')
} 
else{
    alert('Не знаете? ECMAScript!')
}



// Задание 4

let x =+prompt('Введите первое число')
let y =+prompt('Введите второе число')

if (x+y === 10){
    alert(x+y)
}
else{
    console.log(x+y)
}

// Задание 5

let ques = confirm('Вам есть 18?')
if(ques){
    alert('Добро пожаловать')
}
else{
    alert('Вход запрещен!')
}

// Задание 6

let str = 'Javascript'
 str ==='Javascript'
    ? console.log("Fronted")
    : console.log("Backend")

//! Extra tasks

// Задание 1

let z = +prompt('Введите число ')
// if(z>=9 && z<=11){
//     alert("Осень")
// }
// else if(z=12 || z>=1 && z<3){
//     alert("Зима")
// }
// else if(z>=3 && z<=5){
//     alert("Весна")
// }
// else if(z>=6 && z<=8){
//     alert("Лето")
// }
// else{
//     alert('Нету такого месяца')
// }
switch(z){
    case 1: {
        alert( "Осень")
    } break;
    case 2: {
        alert( "Зима")
    } break;
    case 3: {
        alert( "Весна")
    } break;
    case 4: {
        alert( "Лето")
    } break;
    default: {
        alert('Введите число от 1 до 4')
    }
}

// Задание 2

let name = prompt("Как тебя зовут?")
if(name){
    confirm("Вы уверены?")
        ? alert("Ваше имя - " + name)
        : alert("Попробуйте вспомнить")  
}
else{
    alert("Вы отменили действие")
    
}
// if(name){
//     alert("Вы отменили действие")
// }
// else{
//     const confirmed = confirm("Вы уверены?")
//     if(confirmed){
//         alert(`Ваше имя - ${name}"`)
//     }
//     else{
//         alert("Попробуйте вспомнить")
//     }
// }

// Задача 3

let min = prompt('Введите число от 0 до 59')

if(min >=0 && min<=14){
    alert("В первую четверть")
}
else if(min >= 15 && min<=30){
    alert("Во вторую четверть")
}
else if(min>=31 && min<=45){
    alert("В третью четверть")
}
else if(min>=46 && min<=59) {
    alert("В четвертую четверть")
}
else{
    alert('Введите число от 0 до 59')
}
