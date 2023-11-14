let number = 8
let string = "Hello world!"
let boolean = true 

console.log("Число:",number)
console.log("Строка:",string)
console.log("Значение:",boolean)

let stringNumber = "21"
let numberFromString = parseInt(stringNumber)

console.log(numberFromString)

let number1 = 123
let stringFromNumber = number1.toString()

console.log(stringFromNumber)

let numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
    console.log("Элемент " + i + ":", numbers[i])
}

let person ={
    name: "Beka",
    age: 21,
    city:"Bishkek",
    language:"JS"
}

console.log(person)

let number2 = 9

if (number2 % 2 === 0) {
    console.log(number2 + " - четное число")
} else {
    console.log(number2 + " - нечетное число")
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

const arrow = () => {
    console.log("Hello World!")
}

arrow()

function declaration() {
    console.log("Hello World!")
}

declaration()

const expression = function() {
    console.log("Hello World!")
}

expression()

const successfulPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise executed successfully")
    }, 2000)
})

successfulPromise
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.error(error)
    });

const promiseWithError = new Promise((resolve, reject) => {

    setTimeout(() => {
    reject("Error executing the promise")
    }, 4000)
})
    
promiseWithError
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.error(error)
    })


function average(numbers1) {
    return numbers1.length === 0 ? "невозможно вычислить среднее арифметическое" : numbers1.reduce((acc, num) => acc + num, 0) / numbers1.length
}
    
const numbers1 = [10, 20, 30, 40, 50]
const averageValue = average(numbers1)
console.log("Среднее арифметическое:", averageValue)


function toUpperCaseArray(strings) {
    return strings.map(str => str.toUpperCase())
}

const sourceArray = ["hello world!"]
const newArray = toUpperCaseArray(sourceArray)
console.log("Новый массив в верхнем регистре:", newArray)


function sortByAge(people) {
    return people.sort((a, b) => a.age - b.age)
}

const people = [
    { name: "Амир", age: 27 },
    { name: "Улук", age: 22 },
    { name: "Эмир ", age: 24 }
]

const sortedArray = sortByAge(people)
console.log("Отсортированный массив по возрасту:", sortedArray)


function uniqueNumbers(array) {
    return Array.from(new Set(array))
}

const originalArray = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9]
const uniqueNumbersArray = uniqueNumbers(originalArray)
console.log("Уникальные числа:", uniqueNumbersArray)


function sortByFirstName(objects) {
    return objects.sort((a, b) => a.name.localeCompare(b.name))
}

const people1 = [
    { name: "Эмир", age: 24 },
    { name: "Улук", age: 22 },
    { name: "Амир", age: 27 }
]

const sortedArray1 = sortByFirstName(people1)
console.log("Sorted array by name:", sortedArray1)


function getEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0)
}

const originalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = getEvenNumbers(originalNumbers)
console.log("Четные числа:", evenNumbers)


function filterBySalary(employees) {
    return employees.filter(employee => employee.salary > 50000)
}

const employees = [
    { name: "Азирет", salary: 15000 },
    { name: "Эрбол", salary: 50001 },
    { name: "Самат", salary: 75000 }
]

const highSalaryEmployees = filterBySalary(employees)
console.log("Employees with salary > 50000:", highSalaryEmployees)


function filterNumbersInRange(numbers) {
    return numbers.filter(number => number > 10 && number < 20)
}

const originalNumbers1 = [5, 15, 8, 12, 25, 18, 30]
const filteredNumbers = filterNumbersInRange(originalNumbers1)
console.log("Числа больше 10 и меньше 20:", filteredNumbers)


function filterStringsByLength(strings) {
    return strings.filter(str => str.length > 5)
}

const originalStrings = ["backdash", "Tekken", "Ina", "Gun", "Kiwi"]
const filteredStrings = filterStringsByLength(originalStrings)
console.log("Строки длинее 5 символов:", filteredStrings)


function filterNumbersAboveAverage(numbers) {
    const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
    return numbers.filter(number => number > average)
}

const originalNumbers2 = [10, 20, 30, 40, 50]
const filteredNumbers1 = filterNumbersAboveAverage(originalNumbers2)
console.log("числа больше среднего арифметического:", filteredNumbers1)


function filterCompletedTasks(tasks) {
    return tasks.filter(task => task.completed === true)
}

const tasks = [
    {description: "Купить игру", completed: false },
    {description: "Посмотреть фильм", completed: true },
    {description: "Заняться спортом", completed: false },
    {description: "Сделать дз", completed: true }
]

const completedTasks = filterCompletedTasks(tasks)
console.log("Выполненные задачи:", completedTasks)
