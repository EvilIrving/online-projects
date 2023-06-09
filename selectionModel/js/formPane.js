window.createFormPane = function () {
    const formPane = new FormPane();
    formPane.setWidth(310);
    formPane.setHeight(375);
    formPane.setVPadding(0);
    formPane.setHPadding(0);
    formPane.setVGap(0);

    formPane.addTitle('Event');
    formPane.addCustomRow('', [0.1], 23, false, 'Event');

    var stringComboBox = new ht.widget.ComboBox();
    stringComboBox.setWidth(90);
    stringComboBox.setDropDownWidth(140);

    var multiComboBox = new ht.widget.MultiComboBox();
    multiComboBox.setEditable(false);
    multiComboBox.setDropDownComponent(DropDownList);

    formPane.addCustomRow([
        '',
        {
            element: 'Set Selection',
            color: 'rgb(255,255,255,0.6)',
            font: '14px bold arial, sans-serif',
            align: 'left'
        },
        '',
        {
            element: stringComboBox,
            id: 'single'
        }, ''
    ], [20, 0.15, 20, 0.15, 20], 30, false, 'Event');
    formPane.addCustomRow('', [0.1], 15, false, 'Event');
    formPane.addCustomRow([
        '',
        {
            element: 'Append Selection',
            color: 'rgb(255,255,255,0.6)',
            font: '14px arial, sans-serif',
            align: 'left'
        },
        '',
        {
            id: 'multi',
            element: multiComboBox
        }, ''
    ], [20, 0.15, 20, 0.15, 20], 30, false, 'Event');
    formPane.addCustomRow('', [0.1], 15, false, 'Event');
    formPane.addCustomRow([
        '',
        {
            element: 'Select All',
            color: 'rgb(255,255,255,0.6)',
            font: '14px arial, sans-serif',
            align: 'left'
        },
        '',
        {
            id: 'All',
            button: {
                label: 'All',
                labelColor: '#fff',
                borderColor: 'rgba(0, 0, 0,0)',
                labelFont: '14px arial, sans-serif'
            }
        }, ''
    ], [20, 0.15, 20, 0.15, 20], 36, false, 'Event');
    formPane.addCustomRow('', [0.1], 15, false, 'Event');
    formPane.addCustomRow([
        '',
        {
            element: 'Clear Selection',
            color: 'rgb(255,255,255,0.6)',
            font: '14px arial, sans-serif',
            align: 'left'
        },
        '',
        {
            id: 'Clear',
            button: {
                label: 'Clear',
                labelColor: '#fff',
                borderColor: 'rgba(0, 0, 0,0)',
                labelFont: '14px arial, sans-serif'
            }
        }, ''
    ], [20, 0.15, 20, 0.15, 20], 36, false, 'Event');
    formPane.addCustomRow('', [0.1], 23, false, 'Event');

    formPane.addTitle('Listener');
    formPane.addCustomRow('', [0.1], 18, false, 'Listener');
    formPane.addCustomRow([
        '',
        {
            element: 'SelectionModel',
            color: 'rgb(255,255,255,0.6)',
            font: '14px arial, sans-serif',
            align: 'left'
        },
        ''
    ], [20, 0.1, '40+0.15'], 16, false, 'Listener');
    formPane.addCustomRow('', [0.1], 10, false, 'Listener');
    formPane.addCustomRow([
        '',
        {
            id: 'selection_name',
            textField: {
                editable: false,
                text: '',
                color: '#298df9',
                font: '14px arial, sans-serif'
            }
        },
        {
            id: 'selection_kind',
            textField: {
                editable: false,
                text: ' ',
                color: 'rgb(93,217,174)',
                font: '14px arial, sans-serif'
            }
        },
        ''
    ], [20, 0.13, 0.07, 20], 26, false, 'Listener');
    formPane.addCustomRow('', [0.1], 14, false, 'Listener');

    document.body.appendChild(formPane.getView());
    return formPane;
}