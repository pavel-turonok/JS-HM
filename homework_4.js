// Task 1.  
//   - Создайте переменную salary со значением 1000

const salary = 1000;

//   - Создайте переменную grade, которая должна получить значение "middle" если salary больше или равна 1000, и значение "junior" - если меньше

let grade = (salary >= 1000) ? "Middle": "Junior";
console.log(grade) 

// Task 2
// Работа с оператором IF:

//   1. Создать переменную "minAge" и присвоить ей значение 18

const minAge = 18;

//   2. Создать переменную "maxAge" и присвоить ей значение 60

const maxAge = 60;

//   3. Создать переменную "age", в которую вы будете вводить возраст при выполнении программы
//   4. Добавьте проверку: если тип данных в переменной age не number - вывести в консоль Incorrect data type
//   4. Создать if в котором будете проверять весь код переменной age со следующими условиями:
//     - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
//     - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !"
//     - Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel".
//     - Иначе выводите "Technical work".

const age = "59";

if (isNaN(age)){
  console.log("Incorrect data type")
} else {
  if (age < minAge){
      console.log("You don't have access cause your age is " + age + " It's less then " + minAge)
    } else if (age >= minAge && age < maxAge){
      console.log("Welcome!");
    } else if ( age > maxAge){
      console.log("Keep calm and look Culture channel");
    } else {
      console.log("Techical work");
    }
}

// получается что единственный кейс когда выведится "Technical work" - это если age = 60, так как в условие сказано что age должен быть либо > либо < maxAge, но нигде не сказано что age должен быть равен maxAge 

//   5. Проверить задание со следующими значениями в переменной age: 10, 17, 18, 19, 59, 60, 61


// Task 3 (НЕ ОБЯЗАТЕЛЬНО)

// Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
//   преобразовываясь в number