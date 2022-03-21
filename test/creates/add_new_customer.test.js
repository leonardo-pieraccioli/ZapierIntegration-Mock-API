/* globals describe, expect, test, it */

const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const App = require('../../index');
const appTester = zapier.createAppTester(App);
// read the `.env` file into the environment, if available
zapier.tools.env.inject();

describe('creates.add_new_customer', () => {
  it('should run', async () => {
    const bundle = { inputData: {
      user_id: '1',
      name: 'Jamie Lannister',
      gender: 'Male'
    } };

    const results = await appTester(App.creates.add_new_customer.operation.perform, bundle);
    expect(results).toBeDefined();
    // TODO: add more assertions
  });
  
});
