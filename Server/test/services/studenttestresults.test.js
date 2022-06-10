const app = require('../../src/app');

describe('\'studenttestresults\' service', () => {
  it('registered the service', () => {
    const service = app.service('studenttestresults');
    expect(service).toBeTruthy();
  });
});
