/* 抽象工厂 */

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
