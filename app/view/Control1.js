Ext.define('clevercontrol.view.Control1, {
    extend: 'Ext.form.Panel',
    alias: 'widget.control1',
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
                        itemId: 'saveContactBtn',
                        ui: 'action',
                        iconCls: '',
                        iconMask: true,
                        text: 'Save'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Contact Info',
                items: [
                    {
                        xtype: 'textfield',
                        itemId: 'firstName',
                        margin: '10px 0 0 0',
                        label: 'First Name',
                        labelAlign: 'top',
                        name: 'firstName',
                        required: true,
                        readOnly: false
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'lastName',
                        label: 'Last Name',
                        labelAlign: 'top',
                        name: 'lastName',
                        readOnly: false
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'phoneNumber',
                        label: 'Phone Number',
                        labelAlign: 'top',
                        name: 'phoneNumber',
                        required: true,
                        readOnly: false
                    },
                    {
                        xtype: 'emailfield',
                        itemId: 'emailAddress',
                        label: 'Email Address',
                        labelAlign: 'top',
                        name: 'emailAddress',
                        placeHolder: 'email@example.com',
                        readOnly: false
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'address',
                        label: 'Address',
                        labelAlign: 'top',
                        name: 'address',
                        readOnly: false
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'city',
                        label: 'City',
                        labelAlign: 'top',
                        name: 'city',
                        readOnly: false
                    },
                    {
                        xtype: 'textfield',
                        id: 'state',
                        itemId: 'address',
                        label: 'State',
                        labelAlign: 'top',
                        name: 'city',
                        readOnly: false
                    },
                    {
                        xtype: 'numberfield',
                        id: 'zipcode',
                        itemId: 'address',
                        label: 'Zipcode',
                        labelAlign: 'top',
                        name: 'zipcode',
                        readOnly: false
                    },
                    {
                        xtype: 'selectfield',
                        itemId: 'group',
                        label: 'Group',
                        name: 'group',
                        value: 'Contacts',
                        displayField: 'name',
                        store: 'GroupStore',
                        valueField: 'name'
                    }
                ]
            }
        ]
    },

    getValidationErrors: function() {
        var errors = [];
        var reqFields = this.query('field[required=true]');
        var i = 0, ln = reqFields.length, field;
        for (; i < ln; i++) {
            field = reqFields[i];
            if (!field.getValue()) {
                errors.push(field.getLabel() + ' must be completed.');
            }
        }
        console.dir(errors);
        return errors;
    },

    setRecord: function(record) {
        this.callParent(arguments);
        if (record) {
            this.child('contactpic').setData(record.data);
        }
    }

});