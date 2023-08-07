/* 
角色：
Command: 抽象命令类
ConcreteCommand: 具体命令类
Invoker: 调用者
Receiver: 接收者
Client:客户类
*/

// 简单版
class CarManager {
    carInfo(model, id) {
        console.log(`这是model:${model},id:${id}的信息`);
    }

    carBuy(model, id) {
        console.log(`购买model:${model},id:${id}这款车`);
    }

    carDrive(model, id) {
        console.log(`试驾model:${model},id:${id}这款车`);
    }

    execute(type, model, id) {
        let car = new CarManager()
        return car[type] && car[type].apply(CarManager, [].slice.call(arguments, 1))
    }
}

let lily = new CarManager()
lily.execute('carDrive', 'model3', '57385')
lily.execute('carBuy', 'modelY', '20')
lily.execute('carInfo', '未来', '57385')

/* 标准版 */
// 接收者的角色：最后所有命令都会将执行工作委派给编辑器的方法。
class Editor {
    constructor(text) {
        this.text = text
    }

    getSelection() {
        return this.text
    }
    deleteSelection() {
        this.text = ''
    }
    replaceSelection(text) {
        this.text = text
    }
}

// 命令基类会为所有具体命令定义通用接口。声明仅有一个执行方法的命令接口。
class Command {
    constructor(app, editor) {
        this.app = app
        this.editor = editor
        this.backup = ''
    }

    saveBackup() {
        this.backup = this.editor.text || '备份'
    }

    undo() {
        this.editor.text = this.backup || '撤销'
    }

    // 执行方法被声明为抽象以强制所有具体命令提供自己的实现。该方法必须根
    // 据命令是否更改编辑器的状态返回 true 或 false。
    execute() { }
}
// 这里是具体命令。
class CopyCommand extends Command {
    constructor(app, editor) {
        super(app, editor)
    }
    execute() {
        this.app.clipboard = this.editor.getSelection()
        return false
    }
}
class CutCommand extends Command {
    constructor(app, editor) {
        super(app, editor)
    }
    // 剪切命令改变了编辑器的状态，因此它必须被保存到历史记录中。只要方法
    // 返回 true，它就会被保存。
    execute() {
        super.saveBackup()
        this.app.clipboard = this.editor.getSelection()
        this.editor.deleteSelection()
        return true
    }
}
class PasteCommand extends Command {
    constructor(app, editor) {
        super(app, editor)
    }
    execute() {
        super.saveBackup()
        this.editor.replaceSelection(this.app.clipboard)
        return true
    }
}
class UndoCommand extends Command {
    constructor(app, editor) {
        super(app, editor)
    }
    execute() {
        super.undo()
        return false
    }
}

// 全局命令历史记录就是一个堆桟。
class HistoryCommand {
    constructor() {
        this.command = []
    }

    // 后进
    // 将命令压入历史记录数组的末尾
    push(command) {
        this.command ? this.command.push(command) : this.command = [command]

    }
    // 先出
    // 从历史记录中取出最近的命令。
    pop() {
        this.command && this.command.length > 0 ? this.command.pop(command) : false
    }
}

// 发送者的角色：当需要完成某些工作时，它会创建并执行一个命令对象。
class Application {
    constructor(editor) {
        this.clipboard = ''
        this.editor = editor
        this.history = new HistoryCommand()
    }

    // 创建命令， 如有需要可将其关联至接收者。
    copy() {
        this.executeCommand(new CopyCommand(this, this.editor))
    }

    cut() {
        this.executeCommand(new CutCommand(this, this.editor))
    }
    paste() {
        this.executeCommand(new PasteCommand(this, this.editor))
    }
    undo() {
        this.executeCommand(new UndoCommand(this, this.editor))
    }

    // 执行一个命令并检查它是否需要被添加到历史记录中。
    executeCommand(command) {
        if (command.execute()) this.history.push(command)
    }
}

// 客户端必须按照以下顺序来初始化对象：
// 创建接收者。
// 创建命令， 如有需要可将其关联至接收者。
// 创建发送者并将其与特定命令关联。
let editor = new Editor('卧室编辑器')

// 创建发送者
let app = new Application(editor)

app.copy()
console.log(app);
app.cut()
console.log(app);
app.paste()
console.log(app);
app.undo()
console.log(app);
// copyButton.setCommand(copy)
// shortcuts.onKeyPress("Ctrl+C", copy)