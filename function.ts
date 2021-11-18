// 2. Работа с функциями

//функция ничего не возвращает
function user(name: string, age: 23): void {
    console.log(`User name: ${name}, age: ${age}`)
}

//функция с возвратом типа number
function calc(a: number, b: number): number {
    return a + b
}
console.log(calc(1, 5))

//функция типа number, с проверкой b на тип
function calc2(a: number, b: number | string): number {
    if (typeof b === "string") {
        b = +b
    }
    return a + b
}
console.log(calc2(1, '5'))