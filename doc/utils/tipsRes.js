import Tips from './tips'

export default class TipsRes extends Tips {
    constructor({
        el = '',
        options = {}
    } = {}) {
        options.theme = 'res-tips'

        super({ el, isAjax: true, options })

        this._guid = ''
        this._id = ''
        this._extTips = null
        this._axios = getTipsInfoByGuidAxios()

        this.on('create', (instance) => instance._axios = this._axios)

        this.on('show', (instance) => {
            if (this._guid || this._id) {
                this._queryData(instance)
            }
        })
    }

    _queryData(instace) {
        this._axios.sender({ id: this._id, guid: this._guid }).then(data => {
            const { tips } = data
            if (!tips) {
                this._tips.setContent('暂无tips')
                return;
            }
            this._tips.setContent(this._renderTips(tips))
        }).catch(err => {
            this._tips.setContent('查询失败')
        })
    }

    _renderTips(tips) {
        const TipsFragment = document.createDocumentFragment()
        const TipsContainer = document.createElement('div')
        TipsContainer.className = 'tips-container'

        const TipsContent = document.createElement('div')
        TipsContent.className = 'tips-content'

        TipsContainer.appendChild(TipsContent)

        tips.sort((a, b) => b.level - a.level)

        if (this._extTips instanceof Array) tips = tips.concat(this._extTips)

        tips.forEach(tip => {
            const { Label, Text, IconPath } = tip
            const TipsItem = document.createElement('div')
            tipsItem.className = 'tips-item'

            const ItemLabel = document.createElement('label')
            ItemLabel.className = 'item-label'
            ItemLabel.innerText = Label

            const ItemContent = document.createElement('span')
            ItemContent.className = 'item-content'
            ItemContent.innerText = Text

            if (IconPath) {
                const Icon = document.createElement('i')
                Icon.className = 'item-icon' + IconPath
                ItemContent.appendChild(Icon)
            }

            TipsItem.appendChild(ItemLabel)
            TipsItem.appendChild(ItemContent)
        });

        TipsFragment.appendChild(TipsContainer)
        return TipsFragment
    }

    show({ guid, event, extTips, id }) {
        if (!guid && !id) return;
        this._guid = guid
        this._id = id
        this._extTips = extTips
        super.show({ event })
    }


}

function getTipsInfoByGuidAxios(guid) {
    
}