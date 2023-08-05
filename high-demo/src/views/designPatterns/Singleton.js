/* 单例模式 */

// 简单版
let SimpleRoom = function (name) {
    this.name = name
    this.instance = null
}

SimpleRoom.prototype.getName = function () {
    return this.name
}

SimpleRoom.getInstance = function (name) {
    if (this.instance) return this.instance
    return this.instance = new SimpleRoom(name)
}

let SimpleBedRoom = SimpleRoom.getInstance('bedroom')
let SimpleBathRoom = SimpleRoom.getInstance('bathroom')

console.log(SimpleBedRoom === SimpleBathRoom, SimpleBedRoom.getName(), SimpleBathRoom.getName());


// 透明板

let OpacityRoom = (function () {
    let instance = null
    return function (name) {
        if (instance) return instance
        this.name = name
        return instance = this
    }
})()

OpacityRoom.prototype.getName = function () {
    return this.name
}

let OpacityBedRoom = new OpacityRoom('bedroom')
let OpacityBathRoom = new OpacityRoom('bathroom')
console.log(OpacityBedRoom === OpacityBathRoom, OpacityBedRoom.getName(), OpacityBathRoom.getName());

/* 代理版 */
// 此函数只管控单例部分
let proxyCreateRoom = (function () {
    let instance = null
    return function (name) {
        if (instance) return instance
        return instance = new ProxyRoom(name)
    }
})()

const ProxyRoom = function (name) {
    this.name = name
}

ProxyRoom.prototype.getName = function () {
    return this.name
}

let proxyBedRoom = new proxyCreateRoom('bedroom')
let proxyBathRoom = new proxyCreateRoom('bathroom')

console.log(proxyBedRoom === proxyBathRoom, proxyBedRoom.getName(), proxyBathRoom.getName());

/* 惰性模式 */
let getLazyInstance = function (callback) {
    let result
    return function () {
        return result || (result = callback.apply(this, arguments))
    }
}

let lazyRoom = function () {
    this.name = 'lazy'
}

let lazyBedRoom = getLazyInstance(lazyRoom)

/* TODO 在点击打开弹窗时创建 */



/* ES6 */
let roomInstance = null
class Room {
    constructor(name) {
        this.name = name
        if (roomInstance) return roomInstance
        roomInstance = this
    }

    getName() {
        return this.name
    }
}

let BedRoom = new Room('bedroom')
let BathRoom = new Room('bathroom')

console.log(BedRoom === BathRoom, BedRoom.getName(), BathRoom.getName());

/* 
静态方法不会被继承
静态方法不用实例化 
*/
class StaticRoom {
    constructor(name) {
        this.name = name
        this.instance = null
    }

    static getInstance = function (name) {
        if (this.instance) return this.instance
        return this.instance = new StaticRoom(name)
    }

    getName() {
        return this.name
    }
}

let StaticBedRoom = new Room('bedroom')
let StaticBathRoom = new Room('bathroom')

let staticInsance1 = StaticRoom.getInstance('bedroom')
let staticInsance2 = StaticRoom.getInstance('bathroom')

console.log(StaticBedRoom === StaticBathRoom, StaticBedRoom.getName(), StaticBathRoom.getName());

