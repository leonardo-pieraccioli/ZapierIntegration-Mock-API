/* globals describe, expect, test, it */

const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const App = require('../../index');
const appTester = zapier.createAppTester(App);
// read the `.env` file into the environment, if available
zapier.tools.env.inject();

describe('resources.order', () => {
  it('should run', async () => {
    const bundle = { inputData: {
      user_id: 1,
      customer_id: 1
    } };

    const results = await appTester(App.resources.order.list.operation.perform, bundle);
    
    console.log(results);
    expect(results.length).toBeGreaterThan(0);

    // TODO: add more assertions
  });
});
