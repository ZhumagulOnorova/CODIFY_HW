//! Задание 1
//?Создайте функцию, которая принимает два аргумента - числа - и возвращает их сумму.
// function sum(a,b){
//     return result= a+ b
// }
// sum(45,67)
// console.log(result);

//! Задание 2
//?Напишите функцию, которая принимает строку и возвращает эту же строку, но с первой буквой заглавной.

// function strToUpperCase(str){
//     return str[0].toUpperCase()+str.slice(1)
// }
// const str ='javascript'
// let result=strToUpperCase(str)
// console.log(result);

//! Задание 3
//?Создайте функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент увеличен на 1.

// function someArray(arr){
//     let newArr=[]
//     for(let i=0;i<arr.length; i++){
//         newArr.push(arr[i]+1)        
//     }
//     return newArr
// }
// let arr=[5,6,7,8,9]
// let newArray=someArray(arr)
// console.log(newArray);
//! Задание 4
//?Напишите функцию, которая принимает строку и символ, и возвращает количество раз, которое символ встречается в этой строке. 

// function strSym(str){
//     let colvo=0
//     for(let i=0; i<str.length;i++){
//        if(str[i]===sym){
//         colvo++;
//        }
     
//     }return colvo
// }
// let str='Функция, которая принимает строку и символ.'
// let sym = prompt('Введите символ, которого нужно посчитать') // let sym = 'о'
// let strS = strSym(str)
// console.log(strS);
//! Задание 5
//?Создайте функцию, которая принимает массив чисел и возвращает сумму всех элементов, которые делятся на 3.
// function array(arr){
//     let sum=0
//     for(let elem of arr){
//         if(elem % 3 ===0){
//             sum+= elem     
//         }
//     } return sum
// }
// let arr=[3, 5, 6, 8, 9,12,15]
// let sumArr= array(arr)
// console.log(sumArr);

//! Задание 6
//?Напишите функцию, которая принимает строку и возвращает новую строку, в которой каждый символ повторяется дважды.
// function strDublicate(str){
//     let newStr=''
//     for(let i = 0; i<str.length;i++){
//         newStr+=str[i]+str[i]
//     }
//     return newStr
// }
// let str='Function'
// let dStr= strDublicate(str)
// console.log(dStr);
//! Задание 7
//?Создайте функцию, которая принимает массив чисел и возвращает новый массив, в котором все отрицательные числа заменены на ноль.
// function array(arr){
//     let newArr=[]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<0){
//             arr[i]=0
              
//         }newArr.push(arr[i]) 
//     } return newArr
// }
// let arr=[-3, 5, 1, -8, 9,11,-15]
// let nArr =array(arr)
// console.log(nArr);
//! Задание 8
//?Напишите функцию, которая принимает число и возвращает true, если это число является простым, и false в противном случае.

// function prostyeChisla(a){
//     if(a%2!==0 && a%3!==0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// let a = +prompt('Введите число')
// let res = prostyeChisla(a)
// console.log(res);

//! Задание 9

//?Создайте функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент является квадратом исходного элемента.

// function kvadratArray(arr){
//     let kvNewArr=[]
//     for(let i=0; i<arr.length;i++){
//         kvNewArr.push(arr[i]*arr[i])
//     }
//     return kvNewArr
// }
// let arr=[1,4,7,3,8,9]
// let kvArray= kvadratArray(arr)
// console.log(kvArray);
//! Задание 10
//?Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий только те объекты, у которых значение свойства "completed" равно true.
const arr =[
    {
        task:'Go to school!',
        isCompleted: true
    },
    {
        task:'Buy milk',
        isCompleted: false
    },
    {
        task:'Home wark',
        isCompleted: true
    }
]

const fn=(arr)=>{
    const returnedArr=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i].isCompleted){
            returnedArr.push(arr[i])
        }
    } return returnedArr
}

console.log(fn=(arr));
console.log(arr.filter(elem=>elem.isCompleted));

//! Задание 11
//?Создайте функцию, которая принимает две строки и возвращает true, если они являются анаграммами (т.е. содержат одни и те же буквы в разном порядке), и false в противном случае.

// function anagramma(str1,str2){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     let sortStr1= str1.split('').sort().join()  
//     let sortStr2= str2.split('').sort().join()  
//     return sortStr1===sortStr2;
// }

// let str1='торг'
// let str2='грот'
// let result =anagramma(str1,str2)
// console.log(result);

//! Задание 12
//?Напишите функцию, которая принимает два массива чисел и возвращает новый массив, содержащий только те элементы, которые встречаются в обоих массивах.
// function similarElem (arr1, arr2){
//     let newArr=[]
//     for(let i=0;i<arr1.length;i++){
//         if(arr2.includes(arr1[i])){
//             newArr.push(arr1[i])
//         }
//     } return newArr
// }
//  let arr1 = [1,3,6,8,7,9]
//  let arr2 = [1,5,8,7,10,19]
//  let result=similarElem (arr1, arr2)
//  console.log(result);

//! Задание 13
//?Создайте функцию, которая принимает строку и возвращает новую строку, в которой все гласные буквы заменены на символ "*".
// function vowelsChange(str){
//     let vowels=['a','o','i','u','e']
//     let newStr=''
//     for(let i=0;i<str.length; i++){
//         if(vowels.includes(str[i])){
//             newStr+='*'
//         }
//         else{
//             newStr+=str[i]
//         }
//     } return newStr
// }
// let str ='Hello my changed vowels'
// let result =vowelsChange(str)
// console.log(result);
//! Задание 14
//?Напишите функцию, которая принимает массив строк и возвращает новый массив, в котором каждая строка имеет обратный порядок символов.
// function reversedArr(arr){
//     let newArr=[]
//     for(let i=0;i<arr.length;i++){
//         newArr.push(arr[i].split('').reverse().join(''))
//     } return newArr
// }
// let arr=['Hello', 'books', 'life']
// let result=reversedArr(arr)
// console.log(result);