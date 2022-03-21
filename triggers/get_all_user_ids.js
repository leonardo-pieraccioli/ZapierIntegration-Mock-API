// triggers on a new get all user ids with a certain tag
const perform = async (z, bundle) => {
  const response = await z.request({
    url: 'https://62321009c5ec1188ad2956df.mockapi.io/zapier/user',
    params: {}
  });
  // this should return an array of objects
  return response.data;
};

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#triggerschema
  key: 'user',
  noun: 'Get All User Ids',

  display: {
    label: 'New Get All User Ids',
    description: 'Triggers when a new get all user ids is created.',
    hidden: true
  },

  operation: {
    perform,

    // `inputFields` defines the fields a user could provide
    // Zapier will pass them in as `bundle.inputData` later. They're optional.
    inputFields: [],

    // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
    // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
    // returned records, and have obvious placeholder values that we can show to any user.
    sample: {
      createdAt: "2022-03-17T08:52:21.559Z",
      firstname: "Shannon",
      lastname: "Paucek",
      company: "Stehr, Deckow and Olson",
      password: "aGmdJFeAQ3NuUTF",
      id: 1
    },

    // If fields are custom to each user (like spreadsheet columns), `outputFields` can create human labels
    // For a more complete example of using dynamic fields see
    // https://github.com/zapier/zapier-platform/tree/master/packages/cli#customdynamic-fields
    // Alternatively, a static field definition can be provided, to specify labels for the fields
    outputFields: [
      {key: "createdAt", label: 'Created At', helpText: 'Data of customer creation'},
      {key: 'firstname', label: 'First Name'},
      {key: 'lastname', label: 'Last Name'},
      {key: 'company', label: 'Company'},
      {key: 'password', label: 'Password'},
      {key: 'id', label: 'Id'}
    ]
  }
};
