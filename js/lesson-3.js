// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 1
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].
// ------------------------------------------------
const numbers = [1, 2, 3, 4, 5];
// 1)
const squaresNumbers = numbers.map(number => {
  return number * number;
});
console.log(squaresNumbers); // [1, 4, 9, 16, 25]
// 2)
const getSquare = arr => arr.map(number => number * number);
console.log(getSquare(numbers)); // [1, 4, 9, 16, 25]
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].
// ------------------------------------------------
const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];
// 1)
const valuesArray = data.flatMap(item => item.values);
console.log(valuesArray);
// 2)
const getValues = obj => obj.flatMap(item => item.values);
console.log(getValues(data));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 3
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.
// ------------------------------------------------
const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];
// 1)
const findAdult = people.some(person => person.age < 20);
console.log(findAdult);
// 2)
const getAdult = arr => arr.some(person => person.age < 20);
console.log(getAdult(people));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.
// ------------------------------------------------
const numbers1 = [2, 4, 6, 8, 10];
// 1)
const allEven = numbers1.every(number => number % 2 === 0);
console.log(allEven);
// 2)
const getAllEvent = arr => arr.every(number => number % 2 === 0);
console.log(getAllEvent(numbers1));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 5
// Знайдіть перше непарне число
// ------------------------------------------------
const numbers2 = [2, 1, 6, 8, 9, 10, 12];
// 1)
const firstOdd = numbers2.find(number => number % 2 !== 0);
console.log(firstOdd);
// 2)
const getFirstOdd = arr => arr.find(number => number % 2 !== 0);
console.log(getFirstOdd(numbers2));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 6
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].
// ------------------------------------------------
// 1)
const numbersArray = [4, 2, 5, 1, 3];
const sortedNumbers = numbersArray.toSorted((a, b) => a - b);
console.log(sortedNumbers);
// 2)
const getSortedNumbers = arr => arr.toSorted((a, b) => a - b);
console.log(getSortedNumbers(numbersArray));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 7
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].
// ------------------------------------------------
const stringArray = ['banana', 'orange', 'apple', 'pear'];
// 1)
const sortedStrings = stringArray.toSorted((a, b) => a.localeCompare(b));
console.log(sortedStrings);
// 2)
const getSortedStrings = arr => arr.toSorted((a, b) => a.localeCompare(b));
console.log(getSortedStrings(stringArray));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 8
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].
// ------------------------------------------------
const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];
// 1)
const sortedUsers = users.toSorted((a, b) => a.age - b.age);
console.log(sortedUsers);
// 2)
const getSortedUsers = arr => arr.toSorted((a, b) => a.age - b.age);
console.log(getSortedUsers(users));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 9
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]
// ------------------------------------------------
const user = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];
// 1)
const filteredUsers = user.filter(person => person.age > 20);
console.log(filteredUsers);
// 2)
const getFilteredUsers = arr => arr.filter(person => person.age > 20);
console.log(getFilteredUsers(user));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 9+
//  Знайти найдорожчий продукт у категорії "meat"
// Напиши для цього функцію getMostExpensiveMeatProduct(products)
// ------------------------------------------------
const products = [
  { name: 'Apple', category: 'fruits', price: 1.2, stock: 50 },
  { name: 'Banana', category: 'fruits', price: 0.8, stock: 100 },
  { name: 'Carrot', category: 'vegetables', price: 0.5, stock: 200 },
  { name: 'Broccoli', category: 'vegetables', price: 1.0, stock: 150 },
  { name: 'Milk', category: 'dairy', price: 1.5, stock: 20 },
  { name: 'Cheese', category: 'dairy', price: 2.5, stock: 5 },
  { name: 'Chicken', category: 'meat', price: 5.0, stock: 30 },
  { name: 'Beef', category: 'meat', price: 7.0, stock: 25 },
];
const getMostExpensiveMeatProduct = products => {
  return products
    .filter(product => product.category === 'meat')
    .reduce(
      (max, product) => (product.price > max.price ? product : max),
      products[0]
    );
};
console.log(getMostExpensiveMeatProduct(products));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 10
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.
// ------------------------------------------------
const numbers3 = [1, 2, 3, 4, 5];
// 1)
const sum = numbers3.reduce((acc, value) => acc + value, 0);
console.log(sum);
// 2)
const getSum = arr => arr.reduce((acc, value) => acc + value, 0);
console.log(getSum(numbers3));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 11
// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод substruct - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
// Приклад використання:
// const calc = new Calculator();
// ------------------------------------------------
class Calculator {
  constructor() {
    this.value = 0;
  }
  number(value) {
    this.value = value;
    return this;
  }
  add(value) {
    this.value += value;
    return this;
  }
  substract(value) {
    this.value -= value;
    return this;
  }
  multiply(value) {
    this.value *= value;
    return this;
  }
  divide(value) {
    if (value !== 0) {
      this.value /= value;
      return this;
    }
    return console.error('На 0 ділити не можна!');
  }
  getResult() {
    return this.value;
  }
}
const result = new Calculator();
console.log(result.number(10)); // Встановлюємо початкове значення 10
console.log(result.add(5)); // Додаємо 5 (10 + 5 = 15)
console.log(result.substract(3)); // Віднімаємо 3 (15 - 3 = 12)
console.log(result.multiply(4)); // Множимо на 4 (12 * 4 = 48)
console.log(result.divide(2)); // Ділимо на 2 (48 / 2 = 24)
console.log(result.getResult()); // Отримуємо результат: 24
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 12
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email
// ------------------------------------------------
class Client {
  #login;
  #email;
  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }
  get login() {
    return this.#login;
  }
  set login(newLogin) {
    this.#login = newLogin;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
}
const client = new Client('vasya', 'vasya@gmail.com');
client.login = 'petya';
console.log(client.login);
console.log(client.email);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 13
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.
// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.
//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.
// ------------------------------------------------
class Person {
  constructor(name, age, gender, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }
  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}
class Employee extends Person {
  constructor(name, age, gender, email, salary, department) {
    super(name, age, gender, email);
    this.salary = salary;
    this.department = department;
  }
  getEmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department,
    };
  }
}
const employee = new Employee('John', 30, 'man', 'john@gmail.com', 50000, 'IT');
console.log(employee.getDetails());
console.log(employee.getEmployeeDetails());
