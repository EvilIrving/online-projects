/* 代理模式

主要作用是:
在访问实际对象前后添加一系列操作,比如验证权限、日志等。
延迟实际对象的创建,比如按需创建对象。
作为实际对象的本地代表,通过本地代理提升性能。

常见的模式有:
远程(Remote)代理
虚拟(Virtual)代理
Copy-on-Write代理
保护(Protect or Access)代理
缓存(Cache)代理
防火墙(Firewall)代理
同步化(Synchronization)代理
智能引用(Smart Reference)代理

模式结构
Subject: 抽象主题角色,真实主题和代理主题的共同接口
Proxy: 代理主题角色,内部包含对真实主题的引用
RealSubject: 真实主题角色,代理角色所代表的真实对象,实现业务操作，客户端可以通过代理主题角色间接调用真实主题角色中定义的方法

应用
懒加载(Lazy load)
按需加载(Load on demand)
访问控制(Access control)
内存优化(Memory optimization)
安全保护(Protection)
远程访问(Remote access)
*/

/* 通用 */

// 定义Subject接口
class Subject {
    request() {
        //...
    }
}

// 定义RealSubject 
class RealSubject extends Subject {
    request() {
        // 实际处理逻辑
    }
}

// 定义代理Proxy
class Proxy extends Subject {
    constructor() {
        super()
        this.realSubject = new RealSubject();
    }

    request() {
        // 添加代理逻辑
        this.realSubject.request();
    }
}

// 使用Proxy代替RealSubject
const p = new Proxy();
p.request();

/* 虚拟代理 */
class Image {
    constructor(url) {
        this.url = url;
    }

    loadImage() {
        console.log('Loading image from ' + this.url);
    }
}

class ImageProxy {
    constructor(url) {
        this.url = url;
        this.realImage = null;
    }

    loadImage() {
        if (!this.realImage) {
            this.realImage = new Image(this.url);
        }
        this.realImage.loadImage();
    }
}

// 使用代理按需加载真实图像
const proxyImage = new ImageProxy('example.png');
proxyImage.loadImage();

/* 远程代理 */

// 远程服务接口
class RemoteService {
    doSomething() { }
}

/* 本地代理 */
class ProxyService {
    constructor() {
        this.service = new RemoteService(); // 创建远程对象
    }

    doSomething() {
        // 调用远程对象方法
        this.service.doSomething();
    }
}

// 使用本地代理代表远程服务
const service = new ProxyService();
service.doSomething();

/* 保护代理 */

const Permission = {
    Read: 'read',
    Write: 'write',
    Delete: 'delete'
}

class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}

class DataService {
    constructor() {
        this.data = {};
    }

    handleData(user, action, data) {
        if ( action === Permission.Read) {
            // 允许访问数据
            return this.data;
        } else if (action === Permission.Write) {
            // 允许写入数据
            Object.assign(this.data, data);
        } else if (user.role === 'admin' && action === Permission.Delete) {
            // 允许删除数据
            this.data = null;
        } else {
            throw new Error('Permission denied');
        }
    }
}

class ProtectProxy {
    constructor() {
        this.service = new DataService();
    }

    handleData(user, action) {
        return this.service.handleData(user, action);
    }
}

const user1 = new User('Alice', 'readonlu');
const user2 = new User('Bob', 'admin');

const protectProxy = new ProtectProxy();

protectProxy.handleData(user1, Permission.Write, { name: 'John' }); // 允许写入
protectProxy.handleData(user2, Permission.Delete); // 不允许删除,抛出错误

/* 缓存代理 */

// 目标对象
class ImageProcessor {
    constructor() {
        this.processedImg = null
    }
    processImage(img) {
        // 对图片做处理
        this.processedImg = img
        return this.processedImg;
    }
}

// 缓冲代理
class CachedImageProcessor {
    constructor() {
        this.processor = new ImageProcessor();
        this.cache = {};
    }

    processImage(img) {
        let processedImg = this.cache[img];
        if (!processedImg) {
            processedImg = this.processor.processImage(img);
            this.cache[img] = processedImg;
        }
        return processedImg;
    }
}

// 使用缓冲代理
const cachedProcessor = new CachedImageProcessor();
// 第一次计算和缓存
cachedProcessor.processImage('1');
// 第二次直接从缓存获取
cachedProcessor.processImage('1');

/* 智能引用 */
class Resource {
    constructor(name) {
        this.name = name;
    }
}

class SmartReference {
    constructor(resource) {
        this.resource = resource;
        this.refcount = 0;
    }

    getResource() {
        console.log(`Resource '${this.resource.name}' referenced ${++this.refcount} times`);
        return this.resource;
    }
}

const resource = new Resource('example');
const reference = new SmartReference(resource);

reference.getResource();
// Resource 'example' referenced 1 times

reference.getResource();
// Resource 'example' referenced 2 times

/* 防火墙代理 */

// 目标服务
class Server {
    handleRequest(url, data) {
        // 处理请求
    }
}

// 防火墙代理
class Firewall {
    constructor() {
        this.server = new Server();
        this.bannedIPs = []; // 禁止的IP列表
    }

    handleRequest(url, data) {
        // 检查请求IP是否在禁止列表
        if (this.bannedIPs.includes(data.ip)) {
            throw new Error('IP banned');
        }
        // IP没在禁止列表,转发请求到实际服务器
        this.server.handleRequest(url, data);
    }

    banIP(ip) {
        this.bannedIPs.push(ip);
    }
}

// 使用防火墙代理保护实际服务器
const firewall = new Firewall();
firewall.banIP('1.2.3.6');
firewall.handleRequest('test', { ip: '1.2.3.4' }); // 请求被拒绝

/* 同步化代理 */
// 打印机类
class Printer {
    print(user, doc) {
        console.log('Printing ', doc, 'for user', user);
    }
}

// 代理类  
class PrinterProxy {
    constructor() {
        this.printer = new Printer();
        this.queue = [];
    }

    addTask(user, doc) {
        this.queue.push({ user, doc });
    }

    run() {
        // this.isPrinting = true;
        while (this.queue.length > 0) {
            const task = this.queue.shift();
            this.printer.print(task.user, task.doc);
        }
        // this.isPrinting = true;
    }
}

// 使用示例
const printProxy = new PrinterProxy();

printProxy.addTask('user1', 'doc1');
printProxy.addTask('user2', 'doc2');

printProxy.run();

/* Copy-on-Write代理 */
class VirtualData {
    constructor(data) {
        this.data = data;
    }

    get() {
        return this.data;
    }
}

class CopyOnWriteProxy {
    constructor(data) {
        this.virtualData = new VirtualData(data);
    }

    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    get() {
        if (!this.realData) {
            // 只在需要时克隆
            this.realData = this.deepClone(this.virtualData);
        }
        return this.realData;
    }
}

// 使用代理
const data = { foo: 'bar' };
const cloneProxy = new CopyOnWriteProxy(data);

cloneProxy.get(); // 执行克隆