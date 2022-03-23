/* globals describe, expect, test, it */

const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const App = require('../../index');
const appTester = zapier.createAppTester(App);
// read the `.env` file into the environment, if available
zapier.tools.env.inject();
 
describe('triggers.new_customer', () => {
  it('should run', async () => {
    const bundle = { inputData: {
      user_id: 1,
    } };

    const results = await appTester(App.triggers.new_customer.operation.perform, bundle);

    console.log(results.request);
    expect(results).toBeDefined();
    expect(results.data).toBeDefined();
    expect(results.status).toBe(200);
    // TODO: add more assertions
  });

  it('should get an array', async() => {
    const bundle = {
      authData: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
      },
      inputData: {
        user_id: 1,
      },
    }

    const result = await appTester(
      App.triggers.new_customer.operation.perform,
      bundle
    );
    
    expect(result).toBeDefined();
  });
});
