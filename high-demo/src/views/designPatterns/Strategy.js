/* 
策略模式
 * 用策略模式重构表单校验
 * 第一步：将校验逻辑封装成策略对象
 * 第二步：实现 Validator 类。Validator 类在这里作为 Context，负责接收用户的请求并委托给 strategy 对象。
 * 第三步：客户调用代码
 */

let strategies = {
    isNotEmpty: function (value, errorMsg) {
        if (value === '') {
            return errorMsg
        }
    },
    minLength: function (value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg
        }
    },
    isMobile: function (value, errorMsg) {
        if (!/(^1[3|5|8][0-9]{9})/.test(value)) {
            return errorMsg
        }
    }
}

const Validator = function () {
    this.caches = []
}

Validator.prototype.add = function (dom, rules) {
    let self = this
    rules.forEach(rule => {
        let strategyAry = rule.strategy.split(':')
        let errorMsg = rule.errorMsg
        self.caches.push(function () {
            let strategy = strategyAry.shift()
            strategyAry.unshift(dom.value)
            strategyAry.push(errorMsg)
            return strategies[strategy].apply(dom, strategyAry)
        })
    });

    // for (let index = 0, rule; rule = rules[index++];) {
    //     (function (rule) {
    //         let strategyAry = rule.strategy.split(':')
    //         let errorMsg = rule.errorMsg
    //         self.caches.push(function () {
    //             let strategy = strategyAry.shift()
    //             strategyAry.unshift(dom.value)
    //             strategyAry.push(errorMsg)
    //             return strategies[strategy].apply(dom, strategyAry)
    //         })
    //     })(rule)
    // }
}

Validator.prototype.start = function () {
    for (let index = 0, fn; fn = this.caches[index++];) {
        const errMsg = fn()
        if (errMsg) return errMsg

    }
}

// 客户端调用
let registerForm = {
    name: {
        value: 'dom'
    }
}
// let registerForm = document.querySelector('.registerForm')

let validatorFunc = function () {
    let validator = new Validator()

    validator.add(registerForm.name, [{
        strategy: 'isNotEmpty',
        errorMsg: '用户名不能为空'
    }, {
        strategy: 'minLength:6',
        errorMsg: '用户名长度不能少于6位'
    }])

    return validator.start()
}
let errorMsg = validatorFunc()
console.log(errorMsg);

// registerForm.onsubmit = function () {
//     let errorMsg = validatorFunc()
//     if (errorMsg) alert(errorMsg)
//     return false
// }


/* ES6 */

