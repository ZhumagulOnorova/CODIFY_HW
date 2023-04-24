//! Задачи по деструктуризации:

//? 1) Создайте объект с полями name, age и city. С помощью деструктуризации получите значения этих полей в переменные personName, personAge и personCity.

// const obj={
//     name: 'Zhumagul',
//     age: 20,
//     city: 'Bishkek'
// }
// const personName=obj.name
// const personAge=obj.age
// const personCity=obj.city
// const { name, age, city  } = obj
// console.log({personName, personAge, personCity});
// console.log(personName, personAge, personCity);

//? 2) У вас есть массив, содержащий объекты. Каждый объект описывает человека и содержит поля name и age. С помощью деструктуризации получите значения этих полей для первого элемента массива в переменные firstName и firstAge.
// const arr=[
//     {
//         name: 'Aiperi',
//         age: 21
//     },
//     {
//         name: 'Zhumagul',
//         age: 20
//     }
// ]

// const [{ name: firstName, age: firstAge }] = arr;
// console.log({firstName, firstAge});

//? 3) У вас есть объект, содержащий массив чисел. С помощью деструктуризации получите первый и второй элементы массива в переменные firstNum и secondNum.
// const obj={
//     arr:[1,2,3]
// }

// const { arr: [firstNum, secondNum] } = obj;
// console.log({firstNum, secondNum});
// console.log(firstNum, secondNum);
//? 4) Создайте объект person с полями name и age. С помощью деструктуризации создайте новый объект newPerson, содержащий только поле name из объекта person.
// const person={
//     name: 'Zhumagul',
//     age: 20
// }
// const { name } = person
// const newPerson = { name }
// console.log(newPerson);
//? 5) Создайте функцию, которая принимает на вход объект с полями name, age и city, а затем с помощью деструктуризации выводит значения этих полей в консоль.
// const fn=({ name, age, city})=>{
//     console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
// }
// const obj={
//     name: 'Zhumagul',
//     age: 20,
//     city: 'Bishkek'
// }
// console.log(fn(obj));

//! Задачи со spread оператором:

//? 1) Создайте массив numbers1 с элементами 1, 2, 3 и массив numbers2 с элементами 4, 5, 6. Используя оператор spread, объедините эти два массива в новый массив allNumbers.
// const numbers1=[1,2,3]
// const numbers2=[4,5,6]
// const allNumbers= [...numbers1, ...numbers2]
// console.log(allNumbers);
//? 2)Создайте объект person1 с полями name и age, а также объект person2 с полями city и gender. Используя оператор spread, создайте новый объект newPerson, содержащий все поля из person1 и person2.
// const person1={
//     name: 'Zhumagul',
//     age:20
// }
// const person2={
//     city:'Bishkek',
//     gender:'female'
// }
// const newPerson={ ...person1, ...person2}
// console.log(newPerson);
//? 3) Создайте функцию, которая принимает на вход массив чисел и возвращает новый массив, содержащий все элементы исходного массива и число 0 в конце. Используйте оператор spread.
// const fn=(arr)=>{
//     return newArr=[ ...arr, 0]
// }
// const arr=[1,2,3,4,5]
// console.log(fn(arr));
//? 4) Создайте объект person с полями name и age. Используя оператор spread, создайте новый объект newPerson, содержащий все поля из person, а также дополнительное поле city.
// const person={
//     name: 'Zhumagul',
//     age:20
// }
// const newPerson={ ...person, city:'Bishkek'}
// console.log(newPerson);
//? 5) Создайте функцию, которая принимает на вход объект person с полями name, age и city, а затем с помощью оператора spread выводит значения этих полей в консоль.
// const fn 
//! Задачи, комбинирующие деструктуризацию и spread оператор:

//? 1) У вас есть объект person с полями name, age и city. Создайте новый объект newPerson, который содержит все поля из person, кроме поля city. Используйте деструктуризацию и оператор spread.
// const person={
//     name: 'Zhumagul',
//     age: 20,
//     city: 'Bishkek'
// }
// const { city, ...newPerson } = person
// console.log(newPerson);

//? 2) Создайте массив numbers с элементами 1, 2, 3, 4, 5. С помощью деструктуризации и оператора spread создайте новый массив, содержащий первый элемент исходного массива и все остальные элементы, начиная со второго.

// const numbers = [1,2,3,4,5]
// const [ first, ...newArr] = numbers
// console.log(newArr);
//? 3) Создайте объект person1 с полями name и age, а также объект person2 с полями city и gender. Создайте новый объект newPerson, который содержит поле name из person1 и поля city и gender из person2. Используйте деструктуризацию и оператор spread.
// const person1={
//     name: 'Zhumagul',
//     age:20
// }
// const person2={
//     city:'Bishkek',
//     gender:'female'
// }
// const { name } = person1
// const newPerson={  name, ...person2,}
// console.log(newPerson);

//? 4) Создайте объект person с полями name и age, а также массив hobbies со строками, описывающими хобби. Создайте новый объект newPerson, который содержит все поля из person, а также дополнительное поле hobbies, содержащее все элементы массива hobbies. Используйте деструктуризацию и оператор spread.
// const person={
//     name: 'Zhumagul',
//     age:20
// }
// const hobbies =['sing', 'dance', 'coding','sport']
// const newPerson= { ...person, ...hobbies}
// console.log(newPerson);
//? 5) Создайте функцию, которая принимает на вход объект person с полями name, age и city, а затем с помощью деструктуризации и оператора spread выводит значения этих полей в консоль, а также строку "Country: USA".
// const fn=(obj)=>{
//     return newObj={ ...obj, country: 'USA'}
// }
// const obj={
//     name: 'Zhumagul',
//     age:20,
//     city:'Bishkek' 
// }
// console.log(fn(obj));
