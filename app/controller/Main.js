Ext.define('clevercontrol.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        stores: [
            'AreaTimerStore'
        ],

        refs: {
            areaForm:{
                autoCreate: true,
                selector: 'areaForm',
                xtype: 'areaForm'
            }
        },

        control: {
            areaForm: {
                updatedata:'onUpdateFormData'
            },
            "button#saveAreaTimerBtn": {
                tap: 'onSaveAreaTimerBtnTap'
            },
        }
    },
    launch: function(){
        var referrer = Ext.Viewport.getActiveItem();
        var form1 = this.getAreaForm();
        var store = Ext.getStore('AreaTimerStore');
        store.load({
            callback: function(records, operation, success) {
                // the operation object contains all of the details of the load operation
                console.log(records);
                form1.setRecord(records[0]);
                form1.referrer = referrer;
            },
            scope: this
        });

    },
    onUpdateFormData: function(){
        console.log('formdata update');
    },
    onSaveAreaTimerBtnTap: function(button, e, eOpts) {
        console.log('savebtn clicked');
        var form = this.getAreaForm();
        var errors = form.getValidationErrors();

        if (errors.length) {
            Ext.Msg.alert('Error', errors.join('<br/>'));
        } else {
            var values = form.getValues();
            var record = form.getRecord();
            if (record) {
                record.setData(values);
                console.log(record);
                record.commit();
                if (form.referrer.setInfo) {
                    form.referrer.setInfo(record);
                }
                Ext.StoreManager.lookup('AreaTimerStore').sync();
            } else {
                Ext.StoreManager.lookup('AreaTimerStore').add(values);
            }
            //Ext.Viewport.setActiveItem(form.referrer);
            //delete form.referrer;
        }

    },

    areaTimersLoaded: function(record) {
        //console.log('im Conroller');
        //Ext.Viewport.setActiveItem(form);
        /*for(var i = 0; i < options.records.length; i++){
            var marker = new google.maps.Marker({
                 position: new google.maps.LatLng(options.records[i].get('lat'), options.records[i].get('lng')),
                 map: app.views.mapTab.getComponent('mapa')
            });
        }
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(options.records[i].get('lat'), options.records[i].get('lng')),
            **map: app.views.mapTab.getComponent('mapa').map**
        });
        */
        // need to rerender/refresh the map here
    },

    map_rendered: function(options) {
        console.log("map rendered");
    },

    onSportCategoryTap: function(dataview, index, target, record, e, eOpts) {
        var recordeData = record.getData();
        appchecken.util.Config.setActiveSportCategory(recordeData);
        console.log('Set Active SportCategory');
        console.log(appchecken.util.Config.getActiveSportCategory());

        var referrer = this.getMainPanel().getActiveItem();
        var mapPanel = this.getMapPanel();

        //console.log(this.getMainPanel());
        this.getMainPanel().setActiveItem(mapPanel);
    }

});