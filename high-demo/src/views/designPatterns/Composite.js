// 组件接口会声明组合中简单和复杂对象的通用操作。
class Graphic {
    draw() { }
    move(x, y) { }
}

// 叶节点类代表组合的终端对象。叶节点对象中不能包含任何子对象。叶节点对象
// 通常会完成实际的工作，组合对象则仅会将工作委派给自己的子部件。
class Dots extends Graphic {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    move(x, y) {
        this.x = x
        this.y = y
    }
    draw() {
        console.log(this.x, this.y, '一个点');
        // 在坐标位置(X,Y)处绘制一个点。
    }
}

class Circles extends Dots {
    constructor(x, y, radius) {
        super(x, y)
        this.radius = radius
    }

    draw() {
        // 在坐标位置(X,Y)处绘制一个半径为 R 的圆。
        console.log(this.radius, '一个圆');
    }
}

// 组合类表示可能包含子项目的复杂组件。组合对象通常会将实际工作委派给子项
// 目，然后“汇总”结果。

class CompoundGraphic extends Graphic {
    constructor(children) {
        this.children = children
    }

    // 组合对象可在其项目列表中添加或移除其他组件（简单的或复杂的皆可）。
    add(child) {
        this.children.push(child)
    }

    remove(child) {
        this.children = this.children.filter(childItem => childItem !== child)
    }

    move(x, y) {
        this.children.forEach(child => {
            child.move(x, y)
        });
    }

    // 组合会以特定的方式执行其主要逻辑。它会递归遍历所有子项目，并收集和
    // 汇总其结果。
    draw() {
        // 1. 对于每个子部件：
        //     - 绘制该部件。
        //     - 更新边框坐标。
        // 2. 根据边框坐标绘制一个虚线长方形。
    }

}

class ImageClient {
    constructor(all) {
        this.all = all
    }

    load() {
        all = new CompoundGraphic()
        all.add(new Dots(1, 2))
        all.add(new Circles(5, 3, 10))
    }
    // 将所需组件组合为复杂的组合组件。
    groupSelected(components) {
        let group = new CompoundGraphic()
        components.forEach(component => {
            group.add(component)
            all.remove(component)
        });
        all.add(group)
        // 所有组件都将被绘制。
        all.draw()
    }
}


let image = new ImageClient()