window.htconfig = {
    Style: {
        'texture.cache': true,
        "group.padding": "20",
        "group.background": "transparent",
        "group.border.pattern":[5, 5],
        "group.border.color": "#ccc",
        'edge.dash': true,
        'edge.dash.flow': true,
        'edge.dash.pattern':[5,5],
        'edge.dash.color':'#ccc',
        'edge.color': '#fff',
    },
    uiTheme: {
        baseColor: 'rgb(51, 153, 255)',
        hoverColor: 'rgb(72, 163, 255)',
        activeColor: 'rgb(91, 173, 255)',
        inputBackground: 'rgb(22,27,34)',
        popupBackground: 'rgb(31, 37, 46)',
        iconColor: 'rgb(138,138,138)',
        textColor: 'rgb(138,138,138)',
        textDimColor: 'rgb(69, 69, 69)',
        borderColor: 'rgb(22,27,34)',
        lineColor: 'rgb(22,27,34)',
        placeholderTextColor: 'rgb(51, 51, 51)',
        hoverBackground: 'rgb(65, 71, 75)',
        activeBackground: 'rgb(88, 93,  96)',
        rowSelectBackground: 'rgb(19, 24, 31)',
        headerBackground: 'rgb(27, 32, 39)',
        barBackground: 'rgb(69, 69, 69)',
        layoutToggleBackground: 'rgb(69,69,69)',
        viewGroupBackground: 'rgb(31, 37, 46)',
    },
    Default: {
        // Resolve cross-domain issues
        devicePixelRatio: 1.25,
        crossOrigin: 'anonymous',
        toolTipLabelColor: '#CECECE',
        toolTipLabelFont: '14px Microsoft YaHei',
        toolTipBackground: '#000000',
        toolTipBorderRadius: '4px',
        toolTipDelay: 0,
        toolTipContinual: true,
        convertURL: function (url) {
            var storagePrefix = 'storage';
            if (storagePrefix && url && !/^data:image/.test(url) && !/^http/.test(url) && !/^https/.test(url)) {
                url = storagePrefix + '/' + url
            }
            return url;
        }
    }
};
