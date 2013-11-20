Ext.define('clevercontrol.util.Config', { 
    singleton : true,
    alias : 'widget.appConfigUtil',
    config : {
    	baseUrl : '/clevercontrol'
	},
    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    }
}) 