class Publisher {
    constructor() {
        this.subscribers = []
    }

    addSubscriber = (subscriber) => {
        this.subscribers.push(subscriber)
    }
    removeSubscriber = (subscriber) => {
        this.subscribers = this.subscribers.filters(ob !== subscriber)
    }
    notifySubscriber = (msg) => {
        this.subscribers.forEach(sub => {
            sub.update(msg)
        });
    }
}

class Subscribe {
    constructor(name) {
        this.name = name
    }

    update = (msg) => {
        console.log(this.name + ":" + msg);
    }
}

let admin = new Publisher()

// 客户想要手机，登记了名字
let lily = new Subscribe('lily')
let bob = new Subscribe('bob')

admin.addSubscriber(lily)
admin.addSubscriber(bob)

// 当手机到货时
admin.notifySubscriber('手机到货了')


class Event {
    constructor(eventName, callback) {
        if (!this.events[eventName]) this.events[eventName] = []
        this.events[eventName].push(callback)
    }

    addEvent = (eve)=>{
        
    }
    triggerEvent = (eve)=>{}
    removeEvent = (eveName)=>{}

}

class Client {

}