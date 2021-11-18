// 6. Генерик типы

const arr: Array<number> = [1, 2, 3] //массив со значениями типа number
const arr2: number[] = [1, 2, 3] //массив со значениями типа number

interface User {
    id: number
    name: string
    age: number
}

const users: Array<User> = [
    {id: 1, name: 'A', age: 22},
    {id: 2, name: 'B', age: 23}
]

const users2: User[] = [
    {id: 1, name: 'A', age: 22},
    {id: 2, name: 'B', age: 23}
]