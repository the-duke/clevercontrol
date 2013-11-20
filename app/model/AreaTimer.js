Ext.define('clevercontrol.model.AreaTimer', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'id',
                type: 'integer'
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'isEnabled',
                type: 'boolean',
                defaultValue:false
            },
            {
                name: 'startTime',
                type: 'date',
                dateFormat:'H:i'
            },
            {
                name: 'delay',
                type: 'integer'
            },
            {
                name: 'item1_duration',
                type: 'integer'
            },
            {
                name: 'item1_status',
                type: 'boolean',
                defaultValue:false
            },
            {
                name: 'item2_duration',
                type: 'integer'
            },
            {
                name: 'item2_status',
                type: 'boolean',
                defaultValue:false
            }
        ]
    }
});