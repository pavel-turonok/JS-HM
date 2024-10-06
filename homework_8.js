// Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:

const array_task = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31]

//   1. forEach - выведите в консоль все числа, делящиеся без остатка на 3 // 30

array_task.forEach(el => {
	if (el % 3 === 0) {
		console.log(el)
	}
})

//   2. map - создайте новый массив, в котором из каждого элемента изначального массива вычли длину изначального массива
//      // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]

const new_array = array_task.map(el => el - array_task.length)
console.log(new_array)

//   3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
//      // [8, 30, 85, 95, 94]

const filtered_array = array_task.filter(
	(el, index, array) => el > array[index - 1]
)
console.log(filtered_array)

//   4. find - найдите элемент, равный своему индексу //2

const foundElement = array_task.find((el, i) => el === i)
console.log(foundElement)

//   5. sort - отсортируйте массив по возрастанию, не изменив изначальный
//      // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]

const sortedArray = [...array_task].sort((a, b) => a - b)()
console.log(array_task)
console.log(sortedArray)

//   6. reduce - получите сумму всех чисел массива //466

const sumOfNumbers = array_task.reduce((result, el) => {
	result += el
	return result
}, 0)
console.log(sumOfNumbers)

//   7. some - проверьте, есть ли в массиве элементы больше 90 //true

const isMoreThan90 = array_task.some(el => el > 90)
console.log(isMoreThan90)

//   8. every - проверьте, что все элементы массива двухзначные //false

const allElementsWithTwoNumbers = array_task.every(el => el.length === 2)
console.log(allElementsWithTwoNumbers)

// Task 2

// Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв.
//   Массив должен быть отсортирован по возрастанию количества гласных букв в слове.

const words = [
	'umbrella',
	'apple',
	'ocean',
	'independent',
	'education',
	'elephant',
	'island',
	'universe',
	'environment',
	'queue',
]

function countVowels(word) {
	const vowels = 'eyuioa'
	return [...word].filter(char => vowels.includes(char)).length
}

const sortedArrayOfWords = [...words].sort(
	(a, b) => countVowels(a) - countVowels(b)
)

console.log(sortedArrayOfWords)
