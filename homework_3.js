// Task 1. :

// 1. Создать переменную “item_1”
// 2. Присвоить переменной item_1 цифру 5.

const item_1 = 5

// 3. Вывести в консоль item_1.

console.log(item_1)

// 4. Создать переменную “item_2”
// 5. Присвоить переменной item_2 цифру 3.

const item_2 = 3

// 6. Вывести в консоль item_2.

console.log(item_2)

// 7. Создать переменную “item_3”
// 8. Присвоить переменной item_3 сложение item_1 и item_2.

const item_3 = item_1 + item_2

// 9. Вывести в консоль item_3.

console.log(item_3)

// 10. Создать переменную “item_4”
// 11. Присвоить переменной item_4 строку "Hello World"

const item_4 = "Hello World"

// 12. Вывести в консоль item_4.

console.log(item_4)

// 13. Вывести в консоль сложение item_3 и item_4.

console.log(item_3 + item_4)

// 14. Вывести в консоль умножение item_3 и item_4.

console.log(item_3 * item_4)

// 15. Создать переменную “item_5”
// 16. Присвоить переменной item_5 переменную item_3

const item_5 = item_3

/*17. Создать переменную item_6.
  18. Создать переменную item_6_type
  19. Присвоить переменной item_6 значение 15
  20. Присвоить переменной item_6_type тип переменной item_6
*/
const item_6 = 15
const item_6_type = typeof(item_6)

// 21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——  

console.log("item_6 == ", item_6,  "item_6_type == ", item_6_type)

/*22. Создать переменную item_7 и в ней преобразовать item_6 в String.
  23. Создать переменную item_7_type
  24. Присвоить переменной item_7_type тип переменной item_7
*/  

const item_7 = item_6 + ""
const item_7_type = typeof(item_7)

// 25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——

console.log("item_7 == ", item_7,  "item_7_type == ", item_7_type)


/*Task 2*
  Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 

  n + nn + nnn, где n не перемножаются, а конкатенируются
*/

const first_arg = 3
const string_item = "" + first_arg
const second_arg = first_arg + string_item
const third_arg = first_arg + second_arg
const sum = first_arg + Number(second_arg) + Number(third_arg)
console.log("Сумма с конкатинацией -", sum)