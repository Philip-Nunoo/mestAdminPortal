Prospects = new Mongo.Collection('prospects');
Prospects.attachSchema(new SimpleSchema({

    // Defining category and giving it options

    firstName: {
        type: String,
        label: "First Name",
        optional: true,
        max: 50,
        // autoform: {
        //     rows: 1
        // }
    },
    lastName: {
        type: String,
        label: "Last Name",
        optional: true,
        max: 50,
        // autoform: {
        //     rows: 1
        // }
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "Contact Email"
    },

    contact: {
        type: String,
        label: "Contact Phone Number",
        optional: true,
        max: 100,
        // autoform: {
        //     rows: 1
        // }
    },
     category: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'select',
                class: 'browser-default'
            },
            options: function(){
                return [
                    {value: 'fellow', label: 'Fellow'},
                    {value: 'eit', label: 'EIT'},
                    {value: 'staff', label: 'Staff'},
                    {value: 'investor', label: 'Investor'},
                    {value: 'others', label: 'Others'}
                ]
            }
        }
    },
    description: {
        type: String,
        label: "Description",
        optional: true,
        max: 1000,
        autoform: {
    
             afFieldInput: {
                type: 'textarea'
            }
        }
    },
    createdAt: {
        type: Date,
            autoValue: function () {
                  return new Date()
        }
}
}));