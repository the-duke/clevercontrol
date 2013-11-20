Ext.define('clevercontrol.view.AreaForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.areaForm',
    requires:[
    	'Ext.Label',
    	'Ext.field.Toggle',
    	'Ext.form.FieldSet',
    	'Ext.field.Email',
    	'Ext.field.Number',
    	'Ext.field.Spinner',
    	'Ext.ux.field.TimePicker'
    ],
    config: {
        itemId: 'formCancelBtn',
        padding: '10px',
        scrollable: true,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                itemId: 'FormToolbar',
                items: [
                    {
                        xtype: 'button',
                        id: 'starContact',
                        itemId: 'cancelBtn',
                        ui: 'decline',
                        iconMask: true,
                        text: 'Cancel'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'saveAreaTimerBtn',
                        ui: 'action',
                        iconCls: '',
                        iconMask: true,
                        text: 'Save'
                    }
                ]
            },
           	{
            	xtype: 'container',
			    layout: 'hbox',
			    items: [
			        {
			        	width: 100,
			            xtype: 'label',
			            html: 'Timer'
			        },
			        {
			        	flex: 1,
					    xtype: 'togglefield',
					    name: 'isEnabled',
					    value: 1
			           
			        },
			        {
			            flex: 1,
			            xtype: 'timepickerfield',
		            	name: 'startTime',
		                itemId: 'timefield',
		                value: new Date(),
		                
		                	
		                
		                picker:{
		                    height: 300,
		                }
			        }
			    ]
            },
                	{
            	xtype: 'container',
			    layout: 'hbox',
			    items: [
			        {
			        	width: 100,
			            xtype: 'label',
			            html: 'Pause'
			        },
			        {
			        	flex: 5,
					    xtype: 'spinnerfield',
					    name: 'delay',
					    margin: '0 10px 0 0',
					    minValue: 0,
					    maxValue: 60,
					    stepValue: 1,
					    cycle: true
			        },
			        {
			        	width: 50,
			        	margin: '2px',
			        	html: ''
			        }
			    ]
            },
            {
            	xtype: 'container',
			    layout: 'hbox',
			    items: [
			        {
			        	width: 100,
			            xtype: 'label',
			            html: 'Sprenger vorn'
			        },
			        {
			        	flex: 5,
					    xtype: 'spinnerfield',
					    name: 'item1_duration',
					    margin: '0 10px 0 0',
					    minValue: 0,
					    maxValue: 60,
					    stepValue: 5,
					    cycle: true
			        },
			        {
			        	width: 50,
					    xtype: 'button',
					    name: 'item1_status',
					    margin: '2px',
					    iconCls: 'refresh',
					    handler: function( cmp ) {
					       console.log(cmp);
					        return value;
					    },
			        }
			    ]
            },
            {
            	xtype: 'container',
			    layout: 'hbox',
			    items: [
			        {
			        	width: 100,
			            xtype: 'label',
			            html: 'Versenker vorn'
			        },
			        {
			        	flex: 5,
					    xtype: 'spinnerfield',
					    name: 'item2_duration',
					    margin: '0 10px 0 0',
					    minValue: 0,
					    maxValue: 60,
					    stepValue: 5,
					    cycle: true
			        },
			        {
			        	width: 50,
					    xtype: 'button',
					    name: 'item2_status',
					    margin: '2px',
					    iconCls: 'refresh'
			        }
			    ]
            }
        ]
    },
    getValidationErrors: function() {
        var errors = [];
        /*var reqFields = this.query('field[required=true]');
        var i = 0, ln = reqFields.length, field;
        for (; i < ln; i++) {
            field = reqFields[i];
            if (!field.getValue()) {
                errors.push(field.getLabel() + ' must be completed.');
            }
        }
        console.dir(errors);*/
        return errors;
    }

});