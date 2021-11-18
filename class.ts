// 3. Работа с классами
// private - доступен внутри класса
// public - публичные
// protected - защищенные, т.е. доступны только в дочерних элементах

class Server {
    static version = '1.0'

    private status: string = 'working'//status доступен только внутри класса

    constructor(private name: string, protected ip: number) {
    }

    public turnOn() {
        this.status = 'working'
    }

    protected turnOff() {
        this.status = 'offline'
    }

    private getStatus() {
        return  this.status
    }
}

const server: Server = new Server('VDS', 192)