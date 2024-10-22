// Имеется объект

const character = { name: 'Barney', age: 36, gender: 'male', isQa: true }

// 1. Создать массив из ключей объекта character и вывести в консоль те, где 4 буквы //name, isQa

const array_keys = Object.keys(character)
const four_symb_word = array_keys.filter(i => i.length === 4)
console.log(four_symb_word)

// 2. Создать массив из значений объекта character и вывести в консоль те, где тип данных строка //'Barney', 'male'

const array_value = Object.values(character)
const value_string = array_value.filter(i => typeof i === 'string')
console.log(value_string)

// 3. Создать массив из ключей и значений объекта character, перебрать массив циклом for.

const entries = Object.entries(character)
for (const key of entries) {
	console.log(`key = ${key[0]}, value = ${key[1]}`)
}
//    На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`

// 4. Проверить, есть ли в объекте ключ salary, результат вывести в консоль
//    (Реализовать 2мя способами: через оператор in и Object.hasOwn())

// console.log('salary' in character)
// console.log(character.hasOwnProperty('salary'))

const characters = [
	{ name: 'Barney', age: 36 },
	{ name: 'Fred', age: 40 },
	{ name: 'Jack', age: 50 },
]

// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters.

function addCharacter(character) {
	characters.push(character)
	return characters
}
console.log(addCharacter({ name: 'Pavel', age: 26 }))

//     Объект должен иметь поля name (string) и age (number)

// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }

function getCharacter(name) {
	return characters.find(el => el.name === name)
}
// console.log(getCharacter('Fred'))

// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]

function getCharactersByAge(minAge) {
	return characters.filter(el => el.age >= minAge)
}
console.log(getCharactersByAge(26))

// 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)

function updateCharacter(name, newCharacter) {
	const character = getCharacter(name)
	const index = characters.indexOf(character)
	return characters.splice(index, 1, newCharacter)
}
updateCharacter('Jack', { name: 'Pavel', age: 38 })
console.log(characters)

// 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)

function removeCharacter(name) {
	const index = characters.findIndex(character => character.name === name)
	return characters.splice(index, 1)
}

console.log(removeCharacter('Fred'))
