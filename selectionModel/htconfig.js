window.htconfig = {
    Style: {
        'texture.cache': true,
        'label.color': '#fff'
    },
    Default: {
        treeViewLabelColor: '#fff',
        convertURL: function (url) {
            var storagePrefix = 'storage';
            if (storagePrefix && url && !/^data:/.test(url) && !/^http/.test(url) && !/^https/.test(url)) {
                url = storagePrefix + '/' + url
            }
            return url;
        }
    }
};
