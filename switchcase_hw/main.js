// Задание 1

let num = +prompt("Введите число")
let num1 = +prompt("Введите число")
switch(num+num1){
    case 10 :{
        alert(10)
    }
    break;
    case 20 :{
        alert(20)
    }break;
    default:{
        alert("DEFAULT")
    }
}

// Задание 2

let month = prompt('Введите название месяца')
switch(month){
    case 'Декабрь':
    case "Январь":
    case "Февраль":{
        alert('Зима')
    }break;
    case 'Март':
    case "Апрель":
    case "Май":{
        alert('Весна')
    }break;
    case 'Июнь':
    case "Июль":
    case "Август":{
        alert('Лето')
    }break;
    case 'Сентябрь':
    case "Октябрь":
    case "Ноябрь":{
        alert('Осень')
    }break;
    default:{
        alert('Нет такого месяца')
    }
}

// Задание 3

let agepupil= +prompt('Укажите возраст ученика')
switch(agepupil){
    case 6:
    case 7:{
        alert("Первоклассник")
    } break;
    case 8:
    case 9:
    case 10:{
        alert("ученик из начальной школы")
    } break;
    case 11:
    case 12:
    case 13:{
        alert("ученик из средней школы")
    } break;
    case 14:
    case 15:
    case 16:{
        alert("ученик из старшей школы")
    } break;
    default:{
        alert("не ученик")
    }
}

// Задание 3

let age = +prompt('Введите свой возраст')
let firstName = prompt('Введите ваше имя')
let lastName = prompt('Введите вашу фамилию')
console.log(age)
console.log(firstName)
console.log(lastName)

// Задание 4

let arr =[1, 2, 3, 4, 5]
console.log(arr[2])

// Задание 5

let obj = {
    
}
let firstName2= prompt('Введите ваше имя')
let lastName2= prompt('Введите вашу фамилию')
let age2 = +prompt('Введите свой возраст')

obj.firstName1=firstName2
obj.latstName1=lastName2
obj.age1=age2
console.log(obj)

// Задание 6

let str =prompt(`Введите значение :
        1)Объект
        2)Массив `)
switch(str){
    case "Объект":{
        let obj1 = {
        }
        obj1.text=str
        console.log(obj1)
    } break;
    case "Массив":{
        let arr1 = [str]
        console.log(arr1)
    } break;
    default:{
        console.log('Нет такого значения')
    }
}

// Extra tasks

// Задание 1

let obj2 = {
    value: 5
}
let arr2=[5]
if (obj2.value === arr2[0]){
    alert("Значения равны")
}
else{
    alert("Значения не равны")
}
// switch(obj2.value=== arr2[0]){
//     case '':{
//         alert("Значения равны")
//     } break;
//     default:{
//         alert("Значения не равны")
//     }
// }

// Задание 2

let ques = confirm("2+2 = 4?")
// if(ques){
//     let arr3=["Верно"]
//     console.log(arr3)
// }
// else{
//     let obj3={
//         isTrue:"Неверно"
//     }
//     console.log(obj3)
// }

switch(ques){
    case true:{
        let arr3=["Верно"]
        console.log(arr3)
    }break;
    default :{
        let obj3={
            isTrue:"Неверно"
        }
        console.log(obj3)
    }
}

