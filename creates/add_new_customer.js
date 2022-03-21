// create a particular add new customer by name
const perform = async (z, bundle) => {
  const response = await z.request({
    method: 'POST',
    url: 'https://62321009c5ec1188ad2956df.mockapi.io/zapier/user/' + bundle.inputData.user_id + '/customer/',
    // if `body` is an object, it'll automatically get run through JSON.stringify
    // if you don't want to send JSON, pass a string in your chosen format here instead
    body: {
      name: bundle.inputData.name,
      gender: bundle.inputData.gender
    }
  });
  // this should return a single object
  return response.data;
};

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#createschema
  key: 'add_new_customer',
  noun: 'Add New Customer',

  display: {
    label: 'Add New Customer',
    description: 'Creates a new add new customer, probably with input from previous steps.'
  },

  operation: {
    perform,

    // `inputFields` defines the fields a user could provide
    // Zapier will pass them in as `bundle.inputData` later. They're optional.
    // End-users will map data into these fields. In general, they should have any fields that the API can accept. Be sure to accurately mark which fields are required!
    inputFields: [
      {key: 'name', label: 'Name', required: true, placeholder: 'Jamie Lannister', helpText: 'Insert full-name'},
      {key: 'gender', label: 'Gender', required: false, placeholder: 'Male'},
      {key: 'user_id', label: 'User', required: true, default: '1', helpText: 'The company you want to add the customer to', list: false, dynamic: 'user.id.company', altersDynamicFields: false}
    ],

    // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
    // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
    // returned records, and have obvious placeholder values that we can show to any user.
    sample: {
        "name": "Jamie Lannister",
        "gender": "Male"
    },

    // If fields are custom to each user (like spreadsheet columns), `outputFields` can create human labels
    // For a more complete example of using dynamic fields see
    // https://github.com/zapier/zapier-platform/tree/master/packages/cli#customdynamic-fields
    // Alternatively, a static field definition can be provided, to specify labels for the fields
    outputFields: [
      {key: 'name', label: 'New customer name'},
      {key: 'gender', label: 'New customer gender'}
    ]
  }
};
