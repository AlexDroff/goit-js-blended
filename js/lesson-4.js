// Task 1
// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector('body');
console.log(bodyEl);
// 2 - отримай елемент id="title" і виведи його в консоль;
const titleEl = document.querySelector('#title');
console.log(titleEl);
// 3 - отримай елемент class="list" і виведи його в консоль;
const listEl = document.querySelector('.list');
console.log(listEl);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopicEls = document.querySelectorAll('[data-topic]');
console.log(dataTopicEls);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstDataTopicEl = document.querySelector('[data-topic]');
console.log(firstDataTopicEl);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastDataTopicEl = dataTopicEls[dataTopicEls.length - 1];
console.log(lastDataTopicEl);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const siblingEl1 = titleEl.nextElementSibling;
console.log(siblingEl1);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3El = document.querySelectorAll('h3');
h3El.forEach(el => console.log(el.textContent));
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
h3El.forEach(el => el.classList.add('active'));
console.log(h3El);
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navEl = document.querySelector('[data-topic="navigation"]');
console.log(navEl);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navEl.style.backgroundColor = 'yellow';
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const changePEl = navEl.querySelector('p');
changePEl.textContent = 'Я змінив тут текст!';
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення,
//       яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';
const currentTopicEl = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log(currentTopicEl);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
currentTopicEl.style.backgroundColor = 'aqua';
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completedEl = document.querySelector('.completed');
console.log(completedEl);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const RemoveEl = completedEl.parentElement;
RemoveEl.remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const newPEl = document.createElement('p');
newPEl.textContent = "Об'єктна модель документа (Document Object Model)";
titleEl.insertAdjacentElement('afterend', newPEl);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р)
// - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
// тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const newTegLiEl = document.createElement('li');
const newTegH3El = document.createElement('h3');
const newTegPEl = document.createElement('p');
newTegH3El.textContent = 'Властивість innerHTML';
newTegPEl.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.';
newTegLiEl.append(newTegH3El, newTegPEl);
listEl.append(newTegLiEl);
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const greateNewLiEl = `
<li>
  <h3>Властивість innerHTML</h3>
  <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
</li>
`;
listEl.insertAdjacentHTML('beforeend', greateNewLiEl);
// 20 - очисти список
listEl.innerHTML = '';
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 2
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).
// ------------------------------------------------
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const numberContainerEl = document.querySelector('.number-container');
for (let i = 0; i < 100; i++) {
  const numberEl = document.createElement('div');
  const number = randomNumber();
  numberEl.classList.add('number');
  numberEl.textContent = number;
  if (number % 2 === 0) {
    numberEl.classList.add('even');
  } else {
    numberEl.classList.add('odd');
  }
  numberContainerEl.appendChild(numberEl);
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 3
// Form Events, Input, Focus, Blur and Submit.
// Використовуй шаблон форми з файлу html.
// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
// ------------------------------------------------
const formEl = document.querySelector('.js-contact-form');
const inputEl = formEl.querySelector('input[name="userName"]');
const checkBoxEl = formEl.querySelector('input[name="accept"]');
const spanEl = formEl.querySelector('.js-username-output');
inputEl.addEventListener('input', () => {
  const value = inputEl.value.trim();
  if (value.length > 6) {
    inputEl.classList.add('success');
    inputEl.classList.remove('error');
  } else {
    inputEl.classList.add('error');
    inputEl.classList.remove('success');
  }
  spanEl.textContent = value ? value : 'Anonymous';
});
// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
// ------------------------------------------------
inputEl.addEventListener('focus', () => {
  const value = inputEl.value.trim();
  if (value.length === 0) {
    inputEl.style.outline = '3px solid red';
  } else {
    inputEl.style.outline = '3px solid green';
  }
});
// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
// ------------------------------------------------
inputEl.addEventListener('blur', () => {
  const value = inputEl.value.trim();
  if (value.length === 0) {
    inputEl.style.outline = '3px solid red';
  } else {
    inputEl.style.outline = '3px solid lime';
  }
});
// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
// ------------------------------------------------
formEl.addEventListener('submit', event => {
  event.preventDefault();
  const userName = inputEl.value.trim();
  const userAgree = checkBoxEl.checked;
  if (userName.length === 0) {
    alert('Будь ласка, введіть ім`я користувача');
    return;
  }
  if (!userAgree) {
    alert('Будь ласка, погодьтесь з умовами');
    return;
  }
  const formData = {
    userName,
    userAgree,
  };
  console.log(formData);
  formEl.reset();
  spanEl.textContent = 'Anonymous';
  inputEl.classList.remove('success', 'error');
  inputEl.style.outline = 'none';
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Task 4
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
// ------------------------------------------------
const boxEl = document.querySelector('.box');
const btnDecreaseEl = document.querySelector('.js-decrease');
const btnIncreaseEl = document.querySelector('.js-increase');
let boxSize = 150;
const changeBoxSize = () => {
  boxEl.style.width = `${boxSize}px`;
  boxEl.style.height = `${boxSize}px`;
};
changeBoxSize();
btnDecreaseEl.addEventListener('click', () => {
  if (boxSize > 20) {
    boxSize -= 20;
    changeBoxSize();
  }
});
btnIncreaseEl.addEventListener('click', () => {
  boxSize += 20;
  changeBoxSize();
});
