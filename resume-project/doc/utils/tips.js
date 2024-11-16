import tippy /*,{ followCursor } */ from 'tippy.js'
import 'tippy.js/dist/tippy.css'; // optional for styling
import _ from 'lodash'

const DEFAULT_OPTION = {
    arrow: true,
    animation: 'fade',
    theme: 'light',
    interactive: true,
    delay: [1000, 500],
    allowHTML: true,
    appendTo: () => document.body
}

const EVENT_MAP = {
    'create': 'onCreate',
    'destroy': 'onDestroy',
    'show': 'onShow',
    'hide': 'onHide'
}

export default class Tips {
    constructor({
        el = '',
        content = '',
        isAjax = false,
        loading = '加载中...',
        options = {},

    } = {}) {
        this.el = el
        this.content = content
        this.isAjax = isAjax
        this.loading = loading
        this._option = _.merge({}, DEFAULT_OPTION, options)

        if (content) this._option.content = content

        if (this.isAjax) {
            this._option.content = this.loading
            this._option.onHidden = (instance) => instance.setContent(this.loading)
        }
        this._tips = tippy(this.el, this._option)
    }

    show({ contect, event }) {
        if (event) {
            this._tips.setProps({
                getReferenceClientRect: () => ({
                    width: 0, height: 0,
                    top: event.clientX,
                    bottom: event.clientY,
                    left: event.clientX,
                    right: event.clientX
                })
            })
        }

        this._tips.show()

        if (void 0 !== content) {
            if (content instanceof Function) {
                const Result = content()
                if (void 0 !== Result) {
                    if (Result instanceof Promise) {
                        Result.then(res => this._tips.setContent(res))
                    }
                }
            } else {
                this._tips.setContent(content)
            }
        }
    }

    hide() {
        this._tips.hide()
    }
    toggleDisable(flag) {
        flag ? this._tips.enable() : this._tips.disable()
    }
    destroy() {
        this._tips.destroy()
    }
    on({ event, callback }) {
        const EventName = EVENT_MAP[event]
        if (EventName && callback instanceof Function) {
            this._tips.setProps({
                [EventName]: callback
            })
        }
    }
}