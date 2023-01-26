// Проект: guess-the-number
// Описание проекта:
// программа генерирует случайное число в диапазоне от 1 до 100 и просит пользователя угадать
// это число. Если догадка пользователя больше случайного числа, то программа должна вывести
// сообщение 'Слишком много, попробуйте еще раз'. Если догадка меньше случайного числа, то
// программа должна вывести сообщение 'Слишком мало, попробуйте еще раз'. Если пользователь
// угадывает число, то программа должна поздравить его и вывести сообщение 'Вы угадали,
// поздравляем!'.
// Составляющие проекта:
// Целые числа; Переменные; Ввод / вывод данных; Условный оператор; Цикл; Бесконечный цикл;
// Операторы break, continue; Работа с модулем random для генерации случайных чисел; Функции.
let name = '';
let number = Math.floor(Math.random() * 100);
let guesses = 0;

const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

prompt.addEventListener('submit', handleSubmit);

printMessage('Введите имя игрока:');

input.focus();

function handleSubmit(event) {
    event.preventDefault();

    processInput(input.value);

    input.value = '';
}

function printMessage(message) {
    let li = document.createElement('li');

    li.textContent = message;

    output.appendChild(li);
}

function clearOutput() {
    for (let i = 0; i < output.children.length; i++) {
        output.removeChild(output.children[i]);
    }
}

function processInput(input) {
    if (!input) return;

    if (!name) {
        name = input;
        clearOutput();
        printMessage(`${name}, загадано число от 0 до 100. Попробуй отгадать его за наименьшее количество попыток. После каждой попытки я скажу "мало", "много" или "верно".`);
        return;
    }

    printMessage(input);

    let guess = Number.parseInt(input);

    if (Number.isNaN(guess)) return;

    guesses += 1;

    if (guess > number) {
        printMessage('Много. Попробуй еще раз.');
    } else if (guess < number) {
        printMessage('Мало. Попробуй еще раз.');
    } else {
        printMessage(`Верно, это число ${guess}.`);
        printMessage(`Количество попыток: ${guesses}.`);
        printMessage('GAME OVER');

        prompt.remove();
    }
}



















// const n_1 = Math.ceil(Math.random() * 100);
// const n_2 = prompt(`Угадайте число от 1 до 100`);

// function doRandom(n_1_, n_2_) {
//   if (n_2_ > n_1_) {
//     alert(`${n_1_} Слишком много, попробуйте еще раз`);
//   } else if (n_2_ < n_1_) {
//     alert(`${n_1_} Слишком мало, попробуйте еще раз`);
//   } else if (n_2_ === n_1_) {
//     alert(`${n_1_} Вы угадали, поздравляем!`);
//   }
// }

// let rand = doRandom(n_1, n_2);
// rand();