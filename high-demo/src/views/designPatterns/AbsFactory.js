/* 抽象工厂

模式结构
AbstractFactory：抽象工厂,声明生成抽象产品的方法
ConcreteFactory：具体工厂,实现抽象工厂声明的生成抽象产品的方法
AbstractProduct：抽象产品,为每种产品声明接口
Product：具体产品,定义具体工厂生产的具体产品对象,实现抽象产品接口中定义的业务方法。

工厂方法模式针对的是一个产品等级结构，而抽象工厂模式则需要面对多个产品等级结构。

退化
当抽象工厂模式中每一个具体工厂类只创建一个产品对象，也就是只存在一个产品等级结构时，抽象工厂模式退化成工厂方法模式；当工厂方法模式中抽象工厂与具体工厂合并，提供一个统一的工厂来创建产品对象，并将创建对象的工厂方法设计为静态方法时，工厂方法模式退化成简单工厂模式。
*/

class BedRoom {
    constructor() {
        this.name = 'bed room'
        this.usesage = 'sleep'
        console.log('BedRoom Created');
    }
    into = () => {
        console.log('into' + this.name);
    }
    sleep = () => {
        console.log('sleep in' + this.name);
    }
}

class BathRoom {
    constructor() {
        this.name = 'bath room'
        this.usesage = 'sleep'
        console.log("BathRoom Created");
    }
    into = () => {
        console.log('into' + this.name);
    }
    wash = () => {
        console.log('wash in' + this.name);
    }
}

class GernaralRoom {
    constructor() {
        this.name = 'Gernaral room'
        this.usesage = 'everything'
        console.log("GernaralRoom Created");
    }
    into = () => {
        console.log('into' + this.name);
    }
    action = () => {
        console.log('everything in' + this.name);
    }
}

const RoomsFactory = {
    createRoom: function (name, usesage) {
        switch (name) {
            case 'bedroom':
                return new BedRoom(name, usesage)
                break;
            case 'bathroom':
                return new BathRoom(name, usesage)
                break;
            default:
                return new GernaralRoom(name, usesage)
                break;
        }
    }
}


let badRoom = RoomsFactory.createRoom('badroom','bad')
let bedRoom = RoomsFactory.createRoom('bedroom','sleep')
