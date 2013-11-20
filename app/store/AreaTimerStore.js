Ext.define('clevercontrol.store.AreaTimerStore', {
    extend: 'Ext.data.Store',
    requires: [
        'clevercontrol.model.AreaTimer',
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        model: 'clevercontrol.model.AreaTimer',
        storeId: 'AreaTimerStore',
        proxy: {
            type: "ajax",
            api: {
                create: clevercontrol.util.Config.getBaseUrl()+"/backend/submit.php?action=create",
                read: clevercontrol.util.Config.getBaseUrl()+"/backend/submit.php?action=read",
                update: clevercontrol.util.Config.getBaseUrl()+"/backend/submit.php?action=update",
                destroy: clevercontrol.util.Config.getBaseUrl()+"/backend/submit.php?action=delete",
            },
            reader: {
                type: "json",
                rootProperty: "dataRoot",
                successProperty : "success"
            },
            writer: {
                type: 'json',
                writeAllFields: true
            }
        },
        autoLoad: false,
        autoSync: true,
        /*
        listeners: {
            load: function (store, records, success) {
                console.log('event im store');
                console.log(records);
                window['clevercontrol'].app.dispatch({
                    controller: 'clevercontrol.controller.Main',
                    action: 'areaTimersLoaded',
                    args:records
                });
            },
            scope: this
        },*/

        grouper: {
            groupFn: function(record) {
                return record.get('name')[0];

            },
            id: 'SportCatGrouper'
        },
        sorters: {
            id: 'SportCatSorter',
            property: 'id'
        }
    }
});