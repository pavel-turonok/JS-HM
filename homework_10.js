// 1. Context
//   - Создайте объект qa с полями name, age, salary и методом getInfo(greetingsWord), который будет возвращать строку вида:
//     `${greetingsWord}, my name is ${name}, i'm ${age} and my salary is ${salary}`.

const qa = {
	name: 'Pavel',
	age: 26,
	salary: 5000,
	getInfo(greetingsWord) {
		return `${greetingsWord}, my name is ${this.name}, i'm ${this.age} and my salary is ${this.salary}.`
	},
}

console.log(qa.getInfo('Hello there'))
//     Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.

// 2. Changing the context
//   - Создайте объект anotherQa с полями name, age, salary, значения в которых будут отличны от объекта qa
const anotherQA = {
	name: 'Pavel jnr.',
	age: 20,
	salary: 1500,
}
//   - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода bind()

console.log(qa.getInfo.bind(anotherQA)('Hey everyone'))

//   - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода call()

console.log(qa.getInfo.call(anotherQA, 'Hey everyone'))

//   - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода apply()

console.log(qa.getInfo.call(anotherQA, ['Hey everyone']))

// 3. Closures
//   - Создайте функцию createCounter(),
//   - Создайте в функции createCounter переменную count, которая будет равна 0
//   - Верните из функции createCounter новую функцию
//   - В теле новой функции реализуйте увеличение count на + 1 при каждом вызове функции
//   - После увеличение каунтера выводите в консоль `Function was called ${count} times`
//   - Создайте переменную functionCallCounter, в которой будет лежать результат createCounter()
//   - Вызовите functionCallCounter() 5 раз, убедитесь что в консоли верно выводятся данные

const createCounter = arg => {
	let count = 0
	return () => {
		count += arg
		return count
	}
}

const functionCallCounter = createCounter(1)
console.log(functionCallCounter())
console.log(functionCallCounter())
console.log(functionCallCounter())
console.log(functionCallCounter())
console.log(functionCallCounter())

// У вас есть массив чисел.
// Напиши функцию countOccurrences, которая принимает массив чисел и возвращает объект с подсчётом каждого числа.

const numbers = [1, 2, 2, 3, 4, 4, 4, 5]

// // Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }

const countOccurrences = numbers.reduce((result, correntValue) => {
	result[correntValue] = (result[correntValue] || 0) + 1
	return result
}, {})

console.log(countOccurrences)
