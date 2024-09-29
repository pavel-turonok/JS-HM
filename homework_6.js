// 1. Цикл for..of в массиве
//   - Создайте массив [1,2,3,4,5,6,7,8,9,10]
//   - Создайте цикл for..of, бегущий по массиву, в котором будет реализована следующая логика:
//     если элемент четный - возведет его в квадрат
//     если элемент нечетный - возведет его в 3ю степень

const numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const element of numbers_array) {
	if (element % 2 === 0) {
		const even_num = Math.pow(element, 2)
		console.log(even_num)
	} else {
		const odd_num = Math.pow(element, 3)
		console.log(odd_num)
	}
}

// 2. Методы массивов
//   - Создайте массив [1,2,3,4,5]
//   - Добавьте в конец массива число 6 соответствующим методом
//   - Добавьте в начало массива число 0 соответствующим методом
//   - Удалите элемент с индексом 2 из массива соответствующим методом
//   - Удалите последний элемент из массива соответствующим методом
//   В результате вы должны получить [0, 1, 3, 4, 5]

const new_num_array = [1, 2, 3, 4, 5]
new_num_array.push(6)
new_num_array.unshift(0)
new_num_array.splice(2, 1)
new_num_array.pop()

console.log(new_num_array)

// 3. Деструктуризация массивов
//   - Создайте массив из 5 любых чисел (придумать числа самим)
//   - Через деструктуризацию получите в новые переменные первый, второй и остальные элементы массива
//   - Пример: [1,2,3,4,5] => first === 1; second === 2, rest === [3,4,5]

const [first, second, ...rest] = [10, 12, 14, 15, 11, 22, 33, 17]
console.log('First ===', first, 'Second ===', second, 'Rest ===', rest)

// 4. Конкатенация массивов
//   - Создайте массив с числами [1,2,3,4,5]
//   - Создайте еще 1 массив с числами [6, 7, 8, 9, 10]
//   - Создайте переменную mergedArray, который будет хранить значения из массивов 1 и 2
//   - Используйте спред оператор

const last_num_array = [1, 2, 3, 4, 5]
const lastone_num_array = [6, 7, 8, 9, 10]
const mergedArray = [...last_num_array, ...lastone_num_array]
console.log(mergedArray)

// 5. У вас есть массив названий пицц вашего конкурента. Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив)
//   и выводить в консоль только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вывести в консоль null.
//   Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
//   Пиццы конкурента:
//   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']

const competitorPizzas = [
	'Peperoni',
	'Caprichosa',
	'Diablo',
	'4 cheeses',
	'hawai',
]
const my_pizzas = [
	'Peperoni',
	'Homemade',
	'Margarita',
	'Four seasons',
	'Diablo',
	'Hawai',
]

const lowercase_competitor_pizzas = competitorPizzas.map(competitorPizzas =>
	competitorPizzas.toLowerCase()
)
const lower_case_mypizzas = my_pizzas.map(my_pizzas => my_pizzas.toLowerCase())

const uniquePizzas = []

for (let i = 0; i < lower_case_mypizzas.length; i++) {
	if (!lowercase_competitor_pizzas.includes(lower_case_mypizzas[i])) {
		uniquePizzas.push(lower_case_mypizzas[i])
	}
}
console.log(uniquePizzas.length ? uniquePizzas : null)
