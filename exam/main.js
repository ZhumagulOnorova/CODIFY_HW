 //Задание 1
// Напишите функцию, которая принимает массив чисел и возвращает среднее арифметическое значение всех элементов массива.
// const fn=(arr)=>{
//     let arif=arr.reduce((prev,cur)=>{
//         return prev+cur
//     })
//     return arif/arr.length
// }
// console.log(fn([1,3,6,7,8,9]));
//Задание 2
// Напишите функцию, которая принимает два массива чисел и возвращает массив, состоящий из элементов, которые есть в обоих массивах.
// const fn=(arr1,arr2)=>{
//     let newArr=[]
//     for(let i =0; i<arr1.length;i++){
//         if(arr2.includes(arr1[i])){
//             newArr.push(arr1[i])
//         }
//     }
//     return newArr
// }
// let nArr1 =[1,2,3,5,7,9]
// let nArr2 =[1,5,7,6,8,9]
// console.log(fn(nArr1,nArr2));
//Задание 3
// Напишите функцию, которая принимает массив чисел и возвращает массив, состоящий из уникальных элементов.
// let fn=(arr)=>{
//     return Array.from(new Set(arr))
// }
// console.log(fn([1,1,1,2,3,2,5,7]));
//Задание 4
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент умножен на 2.
// let  fn=(arr)=>{
//     return arr.map(elem=>elem*2)
// }
// console.log(fn([1,2,3,4,5]));
//Задание 5
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент возведен в квадрат.
// let  fn=(arr)=>{
//     return arr.map(elem=>elem**2)
// }
// console.log(fn([1,2,3,4,5]));
//Задание 6
// Напишите функцию, которая принимает массив строк и возвращает массив, состоящий из строк, длина которых больше заданного числа.
// let  fn=(arr)=>{
//     return arr.filter(elem=>elem.length>5)
// }
// console.log(fn(['Telephone', 'Laptop','Computer', 'book']));
//Задание 7
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором все элементы уникальны и отсортированы по возрастанию.
// let fn=(arr)=>{
//     return Array.from(new Set(arr)).sort()
// }
// console.log(fn([7,2,1,5,3,2,1,7]));
//Задание 8
// Напишите функцию, которая принимает массив объектов и возвращает новый массив, в котором объекты отсортированы по возрастанию заданного свойства.
// let fn=(arr)=>{
//     let newArr= arr.sort((a,b)=>{
//         return a.age-b.age
//     }) 
//     return newArr
// }
// let arr=[
//     {
//         people:'Zas',
//         age:34
//     },
//     {
//         people:'Leo',
//         age:18
//     },
//     {
//         people:'Rom',
//         age:28
//     }
// ]
// console.log(fn(arr));
//Задание 9
// Напишите функцию, которая принимает два массива объектов и возвращает новый массив, в котором объединены объекты обоих массивов, и если у двух объектов одинаковые свойства, то они объединяются в один объект.


//Задание 10
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором элементы сгруппированы по заданному условию, например, все четные числа в одном массиве, а нечетные в другом.
// let fn=(arr)=>{
//     let chet= arr.filter(elem=>elem%2==0)
//     let neChet=arr.filter(elem=>elem%2!==0)
//     return [chet, neChet]
    
// }
// console.log(fn([1,3,6,7,4,9]));

// ЭКСТРА ТАСКИ 
//Задание 1
// Напишите функцию, которая принимает массив строк и возвращает новый массив, в котором строки отсортированы по длине.
// let  fn=(arr)=>{
//     return arr.sort((a,b)=>{
//         return a.length-b.length
//     })
// }
// console.log(fn(['Telephone', 'Laptop','Computer', 'book']));
//Задание 2
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором элементы отсортированы по количеству делителей.
// let  fn=(arr)=>{
//     let newArr=[]
//     let count =0
//     for(let i=1;i<=arr.length;i++){
//         if(arr[i]% i==0 && arr[i]==!arr[i] && arr[i]==!1){
//             count++

//         }
//     }

//     return newArr

// }
// console.log(fn([1,4,5,32,7,9]));
//Задание 3
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором элементы отсортированы по сумме цифр в числе.
//Задание 4
// Напишите функцию, которая принимает два массива объектов и возвращает новый массив, в котором находятся объекты первого массива, у которых есть соответствующий объект второго массива, с заданным свойством.

let fn=(arr1, arr2)=>{
    let concattedarr= arr1.f
}

let arr1 =[
    {
        name:'Zhaz',
        age:18
    },
    {
        name:'Lo',
        age:65
    }
]
let arr2 =[
    {
        name:'Chloe',
        age:18
    },
    {
        name:'Lisa',
        year: 1998
    }
]