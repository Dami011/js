//declare an empty array
let array = []

//declare a variable with your your full name

let fullName = ['dami mosh'] 

//split your full name

let array2 = fullName.split('')

//remove the first and last  letter

let arr3 = arr2.shift()

//remove the last character

arr3 = arr2.pop()

//remove the empty space

arr3 = arr2.splice(arr2.indexOf(''), 1)

//remove the fifth character and add your middle name

arr3 = arr2.pop()
arr2.splice(4,1, 'glory')

