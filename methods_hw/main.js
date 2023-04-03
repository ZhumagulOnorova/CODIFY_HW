// 1
let arr1=[1,2,3]
let arr2=[4,5,6]
let arr= arr1.concat(arr2)
console.log(arr)

// 2

let mas =[1,2,3]
console.log(mas.reverse())

// 3

let mas1= [1,2,3]
mas1.push(4,5,6)
console.log(mas1)

// 4

let mas2 = [1,2,3]
mas2.unshift(4,5,6)
console.log(mas2)

// 5

let arr3=['js','css','jq']
console.log(arr3.shift())
// console.log(arr3[0])

// 6
let arr4=['js','css','jq']
console.log(arr4.pop())
// console.log(arr4[2])

// 7

let arr5 = [1,2,3,4,5]
console.log(arr5.slice(0, 3))

// 8


let arr6 = [1,2,3,4,5]
console.log(arr5.slice(3, 5))

// 9

let arr7 = [1,2,3,4,5]
arr7.splice(1,2)
console.log(arr7)

// 10

let arr8 = [1,2,3,4,5]
arr8.splice(3,0 ,'a','b','c')
console.log(arr8)

// 11

let arr9 = [1,2,3,4,5]
arr9.splice(1,0, 'a','b')
arr9.splice(6,0, 'c')
arr9.splice(8,0, 'e')
console.log(arr9)