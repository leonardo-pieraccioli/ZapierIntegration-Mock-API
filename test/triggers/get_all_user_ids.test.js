/* globals describe, expect, test, it */

const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const App = require('../../index');
const appTester = zapier.createAppTester(App);
// read the `.env` file into the environment, if available
zapier.tools.env.inject();

describe('triggers.get_all_user_ids', () => {
  it('should run', async () => {
    const bundle = { inputData: {} };

    const results = await appTester(App.triggers.user.operation.perform, bundle);
    expect(results).toBeDefined();
    // TODO: add more assertions
  });

  it('should be an array', async ()=> {
    const bundle = { inputData: {} };
    const results = await appTester(App.triggers.user.operation.perform, bundle);
    expect(results).toBeDefined();
  });
});
