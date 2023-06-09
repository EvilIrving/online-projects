var cssText = "@media screen and (min-width: 900px) {\n    .formpane {\n        top: 10px;\n        right: 10px;\n        position: absolute;\n        background: rgb(37, 46, 59, 0.6);\n        border-radius: 5px;\n    }\n}\n\n@media screen and (max-width: 900px) {\n    .formpane {\n        top: 10px;\n        right: 10px;\n        position: absolute;\n        background: rgb(37, 46, 59, 0.6);\n        border-radius: 5px;\n        transform-origin: top right;\n        transform: scale(0.85);\n    }\n}\n\n.formButton>canvas {\n    border-radius: 4px;\n}\n\n.formButton:hover {\n    cursor: pointer;\n}\n\n.formPaneTitle {\n    font-family: arial, sans-serif;\n    color: #fff;\n    line-height: 26px;\n    text-align: left;\n    padding-left: 20px;\n    border-radius: 4px;\n    box-sizing: border-box;\n    background: linear-gradient(to right, #20a4f6, #3b65ff);\n    user-select: none;\n}";
var style = document.createElement("style");
style.type = "text/css";
var head = document.head || document.getElementsByTagName("head")[0];
if (head.firstChild) {
    head.insertBefore(style, head.firstChild);
}
else {
    head.appendChild(style);
}
if (style.styleSheet) {
    style.styleSheet.cssText = cssText;
}
else {
    style.appendChild(document.createTextNode(cssText));
}

ht.Default.comboBoxBorderColor = null;
ht.Default.setImage('dropdownicon', {
    "width": 12,
    "height": 16,
    "comps": [
        {
            "type": "shape",
            "points": [
                1,
                5,
                6,
                11,
                11,
                5
            ],
            "borderWidth": 2,
            "borderColor": "#298df9"
        }
    ]
});
ht.Default.setImage('uncheck', {
    "width": 16,
    "height": 16,
    "comps": [
        {
            "type": "roundRect",
            "background": "#10151e",
            "borderWidth": 0.5,
            "borderColor": "rgba(86,113,140,0.35)",
            "gradientColor": "#3b65ff",
            "cornerRadius": 1,
            "rect": [
                0.25,
                0.25,
                15.5,
                15.5
            ]
        }
    ]
});
ht.Default.setImage('check', {
    "width": 16,
    "height": 16,
    "comps": [
        {
            "type": "roundRect",
            "background": "#20a4f6",
            "borderColor": "#979797",
            "gradient": "linear.southeast",
            "gradientColor": "#3b65ff",
            "cornerRadius": 1,
            "rect": [
                0,
                0,
                16,
                16
            ]
        },
        {
            "type": "shape",
            "borderWidth": 1,
            "borderColor": "rgb(255,255,255)",
            "borderCap": "round",
            "rotation": 5.49779,
            "points": [
                4.16135,
                4.70447,
                3.69168,
                9.56743,
                13.81456,
                7.45022
            ]
        }
    ]
});

ht.Default.setImage('resetIcon', {
    "width": 26,
    "height": 26,
    "comps": [
        {
            "type": "triangle",
            "borderWidth": 1.5,
            "borderColor": "rgb(255,255,255)",
            "pixelPerfect": true,
            "rotation": 1.5708,
            "rect": [
                12.50001,
                6.25,
                5,
                4
            ]
        },
        {
            "type": "arc",
            "borderWidth": 1.5,
            "borderColor": "rgb(255,255,255)",
            "borderCap": "round",
            "arcFrom": 0,
            "arcTo": 4.7124,
            "arcClose": false,
            "pixelPerfect": true,
            "rect": [
                7,
                8.25,
                12,
                12
            ]
        }
    ]
});
ht.Default.setImage('pauseIcon', {
    "width": 26,
    "height": 26,
    "comps": [
        {
            "type": "roundRect",
            "background": "rgb(255,255,255)",
            "borderColor": "#979797",
            "cornerRadius": 1,
            "pixelPerfect": true,
            "rect": [
                8.5,
                7,
                2,
                12
            ]
        },
        {
            "type": "roundRect",
            "background": "rgb(255,255,255)",
            "borderColor": "#979797",
            "cornerRadius": 1,
            "pixelPerfect": true,
            "rect": [
                15.5,
                7,
                2,
                12
            ]
        }
    ]
});
ht.Default.setImage('resumeIcon', {
    "width": 26,
    "height": 26,
    "comps": [
        {
            "type": "triangle",
            "background": "rgb(255,255,255)",
            "borderWidth": 1,
            "borderColor": "rgb(255,255,255)",
            "pixelPerfect": true,
            "rotation": 1.5708,
            "rect": [
                8.5,
                8.5,
                9,
                9
            ]
        }
    ]
});
ht.Default.setImage('stopIcon', {
    "width": 26,
    "height": 26,
    "comps": [
        {
            "type": "roundRect",
            "background": "rgb(255,255,255)",
            "borderColor": "#979797",
            "cornerRadius": 1,
            "pixelPerfect": true,
            "rect": [
                8.5,
                8.5,
                9,
                9
            ]
        }
    ]
});

ht.widget.Slider.prototype.getToolTip = function () {
    return this._toolTip || Number(Number(this._value).toFixed(2));
}

ht.widget.FormPane.prototype.onInvalidated = function () {
    this.getView().classList.add("formpane");
    this.getView().addEventListener('mousedown', function (event) {
        event.stopPropagation();
    });
}

ht.widget.Button.prototype.onInvalidated = function () {
    this.getView().classList.add("formButton");
};

ht.widget.Button.prototype.getCurrentBackground = function () {
    if (this._canvas) {
        var g = this._canvas.getContext('2d');
        return this._pressed || this._selected ? ht.Default.createGradient(g, 'linear.south', '#2e9dfd', '#385cff', 0, 0, this.getWidth(), this.getHeight()) : ht.Default.createGradient(g, 'linear.south', 'rgb(86,95,115)', '#35364e', 0, 0, this.getWidth(), this.getHeight());
    }
    return null;
};

ht.widget.TextField.prototype.onInvalidated = function () {
    this.getView().classList.add("formInput");
    this.getElement().style.border = '0px';
    this.getElement().style.borderBottom = `2px solid ${this.getColor()}`;
    this.getElement().style.background = 'transparent';

};

ht.widget.ComboBox.prototype.onInvalidated = function () {
    this.getView().classList.add("formCombobox");
    this.setBackground('rgba(37,46,59,0.6)');
    this.setLabelColor('#298df9');
    this.setLabelSelectColor('#298df9');
    this.setLabelFont('14px arial, sans-serif');
    this.setDropDownIcon('dropdownicon');
    this.setDropDownBackground('rgb(37,46,59)');
    this.setSelectBackground('rgb(25,58,105)');
};

ht.widget.MultiComboBox.prototype.onInvalidated = function () {
    this.getView().classList.add("formCombobox");
    this.setBackground('rgba(37,46,59,0.6)');
    this.setLabelColor('#298df9');
    this.setLabelFont('14px arial, sans-serif');
    this.setDropDownIcon('dropdownicon');
};

ht.widget.TreeView.prototype.onInvalidated = function () {
    var self = this;
    this.getView().style.backgroundColor = '#000';
    this.setRowHeight(36);
    this.setLabelColor('rgb(99,164,255)');
    this.getView().addEventListener('mousemove', function (event) {
        var data = self.getDataAt(event);
        self._hoverData = data;
        self.ivm();
    });
    this.getView().addEventListener('mouseleave', function (event) {
        self._hoverData = null;
        self.ivm();
    });
    this.drawRowBackground = function (g, data, selected, x, y, width, height) {
        var self = this,
            rowIndex = self.getRowIndex(data) + 1;
        g.save();
        if (rowIndex & 1) {
            g.fillStyle = 'rgba(212,225,255,0.04)';
        }
        else {
            g.fillStyle = 'rgba(176,209,255,0.10)';
        }
        if (self._hoverData == data) {
            g.fillStyle = 'rgba(99,164,255,0.30)';
        }
        if (selected) {
            g.fillStyle = self.getSelectBackground(data);
        }
        g.fillRect(x, y, width, height);
        g.restore();
    }
    this.setSelectBackground('rgba(0,106,255,0.70)');
    this.setLabelFont('14px arial, sans-serif');
    this.setLabelSelectColor('rgb(204,231,255)');
};

var FormPane = function () {
    FormPane.superClass.constructor.call(this);
};
ht.Default.def('FormPane', ht.widget.FormPane, {
    titles: {},
    allRows: [],
    collapseIcon: {
        "width": 26,
        "height": 26,
        "comps": [
            {
                "type": "triangle",
                "background": "rgb(255,255,255)",
                "borderWidth": 1,
                "borderColor": "rgb(255,255,255)",
                "rotation": 1.5708,
                "rect": [
                    8.5,
                    10,
                    9,
                    6
                ]
            }
        ]
    },
    expandIcon: {
        "width": 26,
        "height": 26,
        "comps": [
            {
                "type": "triangle",
                "background": "rgb(255,255,255)",
                "borderWidth": 1,
                "borderColor": "rgb(255,255,255)",
                "rotation": 3.14159,
                "rect": [
                    8.5,
                    10,
                    9,
                    6
                ]
            }
        ]
    },
    addCustomRow: function (items, widths, height, isTitle, title) {
        var self = this;
        self.allRows.push({
            row: self.addRow(items, widths, height),
            isTitle,
            title
        });
        if (isTitle) {
            self.titles[title] = {
                expand: true,
                show: true
            }
        }
    },
    setTitleVisible: function (title, visible) {
        var self = this;
        if (self.titles[title]) {
            self.titles[title].show = visible;
        }
        self.updateRows();
    },
    setTitleExpand: function (title, expand) {
        var self = this;
        if (self.titles[title]) {
            self.titles[title].expand = expand;
        }
        self.updateRows();
    },
    setAllTitleCollapse: function () {
        var self = this;
        Object.keys(self.titles).forEach(key => {
            self.titles[key].expand = false;
        });
        self.updateRows();
    },
    addTitle: function (title) {
        var self = this;
        var event = document.createElement('div');
        event.className = 'formPaneTitle';
        event.innerHTML = title;
        var icon = document.createElement('canvas');
        icon.style.position = 'absolute';
        icon.style.top = '0';
        icon.style.right = '0';
        icon.style.bottom = '0';
        icon.style.width = '26px';
        icon.width = 26;
        icon.height = 26;
        var g = icon.getContext('2d');
        ht.Default.drawImage(g, self.expandIcon, 0, 0, 26, 26);
        event.appendChild(icon);
        event.addEventListener('click', function () {
            self.titles[title].expand = !!!self.titles[title].expand;
            self.updateRows();
        });
        self.addCustomRow([
            event
        ], [0.1], 26, true, title);
    },
    updateRows: function () {
        var self = this;
        self.clear();
        var formPaneHeight = 0;
        self.allRows.forEach(function (e) {
            if (!self.titles[e.title].show) {
                return;
            }
            if (e.isTitle) {
                var items = e.row.items,
                    widths = e.row.widths,
                    height = e.row.height;
                var iconCanvas = items[0].element.firstElementChild;
                var g = iconCanvas.getContext('2d');

                self.addRow(items, widths, height);
                formPaneHeight += height;
                if (!self.titles[e.title].expand) {
                    self.addRow('', [0.1], 18,);
                    formPaneHeight += 18;
                }

                if (self.titles[e.title].expand) {
                    g.clearRect(0, 0, 26, 26);
                    ht.Default.drawImage(g, self.expandIcon, 0, 0, 26, 26);
                }
                else {
                    g.clearRect(0, 0, 26, 26);
                    ht.Default.drawImage(g, self.collapseIcon, 0, 0, 26, 26);
                }
            }
            else {
                if (self.titles[e.title].expand) {
                    var items = e.row.items,
                        widths = e.row.widths,
                        height = e.row.height;
                    self.addRow(items, widths, height);
                    formPaneHeight += height;
                }
            }
        });
        self.setHeight(formPaneHeight);
    }
});

function DropDownList(master) {
    var self = this;
    DropDownList.superClass.constructor.call(self, master);
    var listView = self._listView = new ht.widget.ListView();
    listView.setLabelColor('#298df9');
    listView.setLabelSelectColor('#298df9');
    listView.setLabelFont('14px arial, sans-serif');
    listView.setRowHeight(29);
    listView.setSelectBackground('rgb(25,58,105)');
    listView.setCheckMode(true);
    listView.sm().ms(function (e) {
        master.setValue(self.getValue());
    });
    for (var i = 1; i <= 3; i++) {
        var data = new ht.Data();
        data._id = i;
        data.setName("Node" + i);
        data.setTag("Node" + i);
        listView.dm().add(data);
    }
    listView.getView().style.background = "rgb(37,46,59)";
    listView.getView().style.padding = '10px 0';
}
ht.Default.def(DropDownList, ht.widget.BaseDropDownTemplate, {
    getView: function () {
        return this._listView.getView();
    },
    onOpened: function (v) {
        if (v) {
            var listView = this._listView,
                nameArr = v.split(",");
            listView.dm().toDatas().each(function (data) {
                if (nameArr.indexOf(data.getName()) >= 0) {
                    listView.sm().as(data);
                }
            });
        }
    },
    onClosed: function () { },
    getValue: function () {
        var names = "",
            listView = this._listView;
        listView.sm().each(function (data) {
            names += data.getName() + ",";
        });
        if (names !== "") names = names.substr(0, names.length - 1);
        return names;
    },
    getHeight: function () {
        var listView = this._listView;
        return listView.dm().size() * listView.getRowHeight() + 20;
    }
});


function lightMaskList(master) {
    var self = this;
    lightMaskList.superClass.constructor.call(self, master);
    var listView = self._listView = new ht.widget.ListView();
    listView.setLabelColor('#298df9');
    listView.setLabelSelectColor('#298df9');
    listView.setLabelFont('14px arial, sans-serif');
    listView.setRowHeight(29);
    listView.setSelectBackground('rgb(25,58,105)');
    listView.setCheckMode(true);
    listView.sm().ms(function (e) {
        master.setValue(self.getValue());
    });
    for (var i = 0; i <= 31; i++) {
        var data = new ht.Data();
        data._id = i;
        data.setName(i);
        data.setTag(i);
        listView.dm().add(data);
    }
    listView.getView().style.background = "rgb(37,46,59)";
    listView._canvas.style.padding = '10px 0';
}
ht.Default.def(lightMaskList, ht.widget.BaseDropDownTemplate, {
    getView: function () {
        return this._listView.getView();
    },
    onOpened: function (v) {
        if (v) {
            var listView = this._listView,
                nameArr = v.split(",");
            listView.dm().toDatas().each(function (data) {
                if (nameArr.indexOf(String(data._id)) > -1) {
                    listView.sm().as(data);
                }
            });
        }
    },
    onClosed: function () { },
    getValue: function () {
        var names = "",
            arr = [],
            listView = this._listView;
        listView.sm().each(function (data) {
            arr.push(data.getName());
        });
        names = arr.sort(function (a, b) {
            return a - b;
        }).join(',');
        return names;
    },
    getHeight: function () {
        var listView = this._listView;
        return 10 * listView.getRowHeight() + 20;
    }
});


window.showMessage = (function () {
    function Tooltip() {
        var self = this;
        Tooltip.superClass.constructor.call(self);
        var div = self._container = document.createElement('div');
        div.className = 'ht-vector-tooltip';
    }

    ht.Default.def(Tooltip, Object, {
        show: function (text, e) {
            var self = this;
            if (typeof text === 'number') {
                text = text + '';
            }
            if (typeof text === 'string') {
                self._container.innerHTML = text;
            }
            else {
                if (text.parentNode !== self._container) {
                    var children = self._container.children;
                    var len = children.length;
                    for (var i = len - 1; i >= 0; i--) {
                        removeHTML(children[i]);
                    }
                    self._container.innerText = '';
                    self._container.appendChild(text);
                }
            }
            if (!self._container.parentNode) {
                document.body.append(self._container)
            }
            self.update(e);
        },
        update: function (e) {
            var self = this;
            var divRect = self._container.getBoundingClientRect(),
                winInfo = ht.Default.getWindowInfo(),
                style = self._container.style,
                clientPoint = ht.Default.getClientPoint(e),
                x = clientPoint.x + 8,
                y = clientPoint.y + 8;

            style.pointerEvents = 'none';

            x = Math.max(0, x);
            y = Math.max(0, y);
            if (x + divRect.width > winInfo.width) {
                x = winInfo.width - divRect.width;
            }
            if (y + divRect.height > winInfo.height) {
                y = winInfo.height - divRect.height;
            }


            self._container.style.left = x + 'px';
            self._container.style.top = y + 'px';
        },
        hide: function () {
            var self = this;
            removeHTML(self._container);
        }
    })

    var tooltip = new Tooltip();
    return function (text) {
        tooltip.show(text, { x: 10, y: 100 });
    }
})();



