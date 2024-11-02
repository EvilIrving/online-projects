/* 简单工厂
Factory：工厂角色, 负责实现创建所有实例的内部逻辑
Product：抽象产品角色, 是所创建的所有对象的父类，负责描述所有实例所共有的公共接口
ConcreteProduct：具体产品角色, 创建目标，所有创建的对象都充当这个角色的某个具体类的实例。
*/

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