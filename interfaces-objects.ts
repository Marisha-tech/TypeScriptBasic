// 4. Интерфейсы и объекты

interface UserInterface {
    name: string
    age: number
    logInfo: () => void //метод ничего не возвращает
    id?: number //если в классе нет id
}

const user: UserInterface = {
    name: 'login',
    age: 23,
    logInfo() {
        console.log(this.name + ' ' + this.age)
    }
}