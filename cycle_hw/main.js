//!TASKS
//? Выведите столбец чисел от 1 до 100.
for(let i=1; i<=100; i++){
    console.log(i)
}
//? Выведите столбец чисел от 11 до 33.
for(let i=11; i<=33; i++){
    console.log(i)
}
//? Выведите столбец четных чисел в промежутке от 1 до 100.
for(let i=1; i<=100; i++){
    if(i%2=== 0){
        console.log(i)
    }
}
//? С помощью цикла найдите сумму чисел от 1 до 100
let sum = 0
for(let i=1; i<=100; i++){
    sum=sum + i
}
console.log(sum)
//? Дан массив с элементами [1,2,3,4,5] . С помощью цикла for выведите все элементы на экран.
const arr= [1,2,3,4,5]
for(let elem of arr){
    console.log(elem)
}

//? 6 
let result = 0
let arr1 = [1,2,3,4,5]
for(let elem of arr1){
    result+=elem
}
console.log(result)

//? 7

let arr2 = [2, 5, 9, 15, 0, 4]
for(let elem of arr2){
    if(elem > 3 && elem < 10){
        console.log(elem)
    }
}

// ? 8
let arr3= [1,-9,4,6,2,-6,8]
let summ=0
for(let elem of arr3){
    if(elem>0){
        summ=summ+elem
    }
}
console.log(summ)
//? 9
let arr4 = [1,2,5,9,4,13,4,10]
for(let elem of arr4){
    if(elem===4){
        console.log('Есть')
    }
}
//? 10

let arr5=[1,2,3,4,5,6,7,8,9]
// let mas = []
// for(let i=0; i<arr5.length; i++){
//    mas.push('-'+ arr5[i])
// }
// console.log(mas.join(''))

let str2=''
for (let elem of arr5){
    str2+= '-'+ elem
}
console.log(str)

//? *
let str = '#'
for( let i =1;i<6;i++){
    console.log(str)
    str=str +'#'
}

