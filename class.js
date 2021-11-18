// 3. Работа с классами
// private - доступен внутри класса
// public - публичные
// protected - защищенные, т.е. доступны только в дочерних элементах
var Server = /** @class */ (function () {
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
        this.status = 'working'; //status доступен только внутри класса
    }
    Server.prototype.turnOn = function () {
        this.status = 'working';
    };
    Server.prototype.turnOff = function () {
        this.status = 'offline';
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.version = '1.0';
    return Server;
}());
var server = new Server('VDS', 192);
