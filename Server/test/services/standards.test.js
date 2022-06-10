const app = require('../../src/app');

describe('\'standards\' service', () => {
  it('registered the service', () => {
    const service = app.service('standards');
    expect(service).toBeTruthy();
  });
});
