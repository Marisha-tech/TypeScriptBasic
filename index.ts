//1. Базовые типы

//строка
const firstName: string = 'Marina'
let lastName: string = 'Фамилия'

//число
const num: number = 23
// let sum: number = num + '1'
let sum: number = num + 1

//массив
let arNumberAny: any = ['1', 2, 3]
let arNumber: number[] = [1, 2, 3]
let arNumberArray: Array<number> = [1, 2, 3]
let arNumberArrayAny: Array<any> = [1, '2', 3]
let arString: string[] = ['H', 'e', 'l']
let arStringArray: Array<string> = ['H', 'e', 'l']

//булево
let isActive: boolean = !!true
let active
if (isActive === true) {
    active = 'Активно'
}
active = 'Не активно'