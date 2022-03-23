// get a list of orders
const performList = async (z, bundle) => {
  const response = await z.request({
    url: 'https://62321009c5ec1188ad2956df.mockapi.io/zapier//user/:id/customer/'+bundle.inputData.customer_id+'/orders',
    params: {
      sort_by: 'createdAt',
      order: 'desc'
    }
  });
  return response.data
};

// find a particular order by name (or other search criteria)
const performSearch = async (z, bundle) => {
  const response = await z.request({
    url: 'https://62321009c5ec1188ad2956df.mockapi.io/zapier//user/:id/customer/'+bundle.inputData.customer_id+'/orders/'+bundle.inputData.order_id,
  });
  return response.data
};

// creates a new order
const performCreate = async (z, bundle) => {
  const response = await z.request({
    method: 'POST',
    url: 'https://62321009c5ec1188ad2956df.mockapi.io/zapier//user/:id/customer/'+bundle.inpuData.customer_id+'/orders',
    body: {
      name: bundle.inputData.name, // json by default
      cost: bundle.inputData.cost
    }
  });
  return response.data
};

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#resourceschema
  key: 'order',
  noun: 'Order',

  /* If `get` is defined, it will be called after a `search` or `create`
  // useful if your `searches` and `creates` return sparse objects
  // get: {
  //   display: {
  //     label: 'Get Order',
  //     description: 'Gets a order.'
  //   },
  //   operation: {
  //     inputFields: [
  //       {key: 'id', required: true}
  //     ],
  //     perform: defineMe
  //   }
  // },*/

  list: {
    display: {
      label: 'New Order',
      description: 'Lists the orders.'
    },
    operation: {
      perform: performList,
      // `inputFields` defines the fields a user could provide
      // Zapier will pass them in as `bundle.inputData` later. They're optional on triggers, but required on searches and creates.
      inputFields: [
        {key: 'customer_id', label: 'Customer ID', required: true}
      ]
    }
  },

  search: {
    display: {
      label: 'Find Order',
      description: 'Finds a order given its id.'
    },
    operation: {
      inputFields: [
        {key: 'customer_id', label: 'Customer ID', required: true},
        {key: 'id', label: 'Order ID', required: true}
      ],
      perform: performSearch
    },
  },

  create: {
    display: {
      label: 'Create Order',
      description: 'Creates a new order.'
    },
    operation: {
      inputFields: [
        {key: 'name', label: 'Name', required: true},
        {key: 'cost', label: 'Cost', required: true},
        {key: 'customerId', label: 'Customer ID', required: true},
      ],
      perform: performCreate
    },
  },

  // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
  // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
  // returned records, and have obvious placeholder values that we can show to any user.
  // In this resource, the sample is reused across all methods
  sample: {
    createdAt: "2022-03-17T12:07:51.846Z",
    name: "Tuna",
    cost: "444.00",
    id: "1",
    userId: "1"
  },

  // If fields are custom to each user (like spreadsheet columns), `outputFields` can create human labels
  // For a more complete example of using dynamic fields see
  // https://github.com/zapier/zapier-platform/tree/master/packages/cli#customdynamic-fields
  // Alternatively, a static field definition can be provided, to specify labels for the fields
  // In this resource, these output fields are reused across all resources
  outputFields: [
    {key: 'id', label: 'ID'},
    {key: 'name', label: 'Name'},
    {key: 'cost', label: 'Cost'},
    {key: 'customerId', label: 'Customer ID'},
    {key: 'createdAt', label: 'Date of creation'} 
  ]
};
