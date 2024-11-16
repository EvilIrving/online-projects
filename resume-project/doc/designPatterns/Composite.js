/* 
结构    
组件 （Component） 接口描述了树中简单项目和复杂项目所共有的操作。
叶节点 （Leaf） 是树的基本结构， 它不包含子项目。
容器 （Container）——又名 “组合 （Composite）”——是包含叶节点或其他容器等子项目的单位。 
客户端 （Client） 通过组件接口与所有项目交互。

桥接模式、 状态模式和策略模式 （在某种程度上包括适配器模式） 模式的接口非常相似。 实际上， 它们都基于组合模式——即将工作委派给其他对象
*/

// 组件接口会声明组合中简单和复杂对象的通用操作。
class Graphic {
    add() { }
    remove() { }

    draw() { }

    isCompound() {
        return false
    }
}

// 叶节点类代表组合的终端对象。叶节点对象中不能包含任何子对象。叶节点对象
// 通常会完成实际的工作，组合对象则仅会将工作委派给自己的子部件。
class Dots extends Graphic {
    constructor(x, y) {
        super()
        this.x = x
        this.y = y
    }
    draw() {
        // 在坐标位置(X,Y)处绘制一个点。
        return '点'
    }

    isCompound() {
        return false
    }
}

class Circles extends Dots {
    constructor(x, y, radius) {
        super(x, y)
        this.radius = radius
    }

    draw() {
        // 在坐标位置(X,Y)处绘制一个半径为 R 的圆。
        return '圆'
    }

    isCompound() {
        return false
    }
}

// 组合类表示可能包含子项目的复杂组件。组合对象通常会将实际工作委派给子项目，然后“汇总”结果。
class CompoundGraphic extends Graphic {
    constructor() {
        super()
        this.children = []
    }

    // 组合对象可在其项目列表中添加或移除其他组件（简单的或复杂的皆可）。
    add(child) {
        this.children.push(child)
    }

    remove(child) {
        this.children = this.children.filter(childItem => childItem !== child)
    }

    // 组合会以特定的方式执行其主要逻辑。它会递归遍历所有子项目，并收集和
    // 汇总其结果。
    draw() {
        let res = []
        for (const child of this.children) {
            res.push(child.draw())
        }
        return `Branch(${res.join('+')})`
    }

    isCompound() {
        return true
    }
}


function imageClient(comp) {
    console.log(`RESULT: ${comp.draw()}`);
}

function imageClient2(comps, otherComps) {
    if (otherComps.isCompound) {
        comps.add(otherComps)
        console.log(`RESULT2: ${comps.draw()}`);
    }
}

let dot = new Dots(30, 30)
let circle = new Circles(5, 5, 5)
let dottwo = new Dots(40, 30)

const compsTree = new CompoundGraphic()

const branchOne = new CompoundGraphic()
const branchTwo = new CompoundGraphic()
const branchThree = new CompoundGraphic()
branchOne.add(dot)
branchOne.add(circle)
branchOne.add(dottwo)
branchTwo.add(dot)
branchTwo.add(circle)
branchTwo.add(dottwo)
branchTwo.add(branchThree)

compsTree.add(branchOne)
compsTree.add(branchTwo)

imageClient(compsTree)

let otherBranch = new Dots(1, 1)

imageClient2(compsTree, otherBranch)