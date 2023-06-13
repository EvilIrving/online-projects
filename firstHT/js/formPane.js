window.createFormPane = function () {
    var formPane = new FormPane();
    formPane.setWidth(255);
    formPane.setHeight(395);
    formPane.setVPadding(0);
    formPane.setHPadding(0);
    formPane.setVGap(0);

    formPane.addTitle('Event');
    formPane.addCustomRow('', [0.1], 23, false, 'Event');
    formPane.addCustomRow([
        '',
        {
            id: 'Add',
            button: {
                label: 'Add',
                labelColor: '#fff',
                borderColor: 'rgba(0, 0, 0,0)',
                labelFont: '14px arial, sans-serif'
            }
        }, ''
    ], [30, 0.15, 30], 36, false, 'Event');
    formPane.addCustomRow('', [0.1], 15, false, 'Event');
    formPane.addCustomRow([
        '',
        {
            id: 'Remove',
            button: {
                label: 'Remove',
                labelColor: '#fff',
                borderColor: 'rgba(0, 0, 0,0)',
                labelFont: '14px arial, sans-serif'
            }
        }, ''
    ], [30, 0.15, 30], 36, false, 'Event');
    formPane.addCustomRow('', [0.1], 15, false, 'Event');
    formPane.addCustomRow([
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
    ], [30, 0.15, 30], 36, false, 'Event');
    formPane.addCustomRow('', [0.1], 23, false, 'Event');

    formPane.addTitle('Listener');
    formPane.addCustomRow('', [0.1], 18, false, 'Listener');
    formPane.addCustomRow([
        '',
        {
            element: 'DataModel',
            color: 'rgb(255,255,255,0.6)',
            font: '14px arial, sans-serif',
            align: 'left'
        },
        ''
    ], [20, 0.1, 20], 16, false, 'Listener');
    formPane.addCustomRow('', [0.1], 10, false, 'Listener');
    formPane.addCustomRow([
        '',
        {
            id: 'data_name',
            textField: {
                editable: false,
                text: 'Node1',
                color: '#298df9',
                font: '14px arial, sans-serif'
            }
        },
        {
            id: 'data_kind',
            textField: {
                editable: false,
                text: 'added',
                color: 'rgb(93,217,174)',
                font: '14px arial, sans-serif'
            }
        },
        ''
    ], [20, 0.1, 0.1, 20], 26, false, 'Listener');
    formPane.addCustomRow('', [0.1], 14, false, 'Listener');
    formPane.addCustomRow([
        '',
        {
            element: 'Data',
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
            id: 'data_name_1',
            textField: {
                editable: false,
                text: ' ',
                color: '#298df9',
                font: '14px arial, sans-serif'
            }
        },
        {
            id: 'data_property',
            textField: {
                editable: false,
                text: ' ',
                color: 'rgb(93,217,174)',
                font: '14px arial, sans-serif'
            }
        },
        {
            id: 'data_event',
            textField: {
                editable: false,
                text: ' ',
                color: '#FEB64D',
                font: '14px arial, sans-serif'
            }
        },
        ''
    ], [20, 0.1, 0.1, 0.1, 20], 26, false, 'Listener');

    document.body.appendChild(formPane.getView());
    return formPane;
}