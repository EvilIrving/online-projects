/* 简单工厂 */

// 类声明
class Room {
    constructor(name, usesage) {
        this.name = name
        this.usesage = usesage
    }

    openDoor = (name) => {
        console.log(this.name + 'door\'s opened');
    }
    closeDoor = (name) => {
        console.log(this.name + 'door\'s closed');
    }
}

const RoomItem = new Room('bedroom', 'sleep')

// 函数声明
function RoomFac(name, usesage) {
    this.name = name
    this.usesage = usesage
}

RoomFac.prototype.openDoor = function (name) {
    console.log(this.name + 'door\'s opened');
}

RoomFac.prototype.closeDoor = function (name) {
    console.log(this.name + 'door\'s closed');
}

const RoomIns = new RoomFac('bath room', 'wash')