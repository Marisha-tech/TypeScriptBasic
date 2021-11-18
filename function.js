// 2. Работа с функциями
//функция ничего не возвращает
function user(name, age) {
    console.log("User name: " + name + ", age: " + age);
}
//функция с возвратом типа number
function calc(a, b) {
    return a + b;
}
console.log(calc(1, 5));
//функция типа number, с проверкой b на тип
function calc2(a, b) {
    if (typeof b === "string") {
        b = +b;
    }
    return a + b;
}
console.log(calc2(1, '5'));
