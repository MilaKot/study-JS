
const value1 = 10; 
const max = 100; 
let value2 = Math.floor(Math.random() * max); // Генерируем случайное целое число
// В JavaScript операторы имеют разный приоритет. Оператор деления (/) имеет более высокий приоритет, чем оператор сложения (+).
// Это означает, что деление будет выполнено перед сложением.
// В данном случае, сначала будет выполнено деление value2 на 5, а затем результат будет сложен с value1 и 17.
let result = value1 + value2 / 5 + 17;
// Выводим результат в консоль
console.log(result);