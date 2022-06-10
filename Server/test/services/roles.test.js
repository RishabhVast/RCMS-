const app = require('../../src/app');

describe('\'roles\' service', () => {
  it('registered the service', () => {
    const service = app.service('y');
    expect(service).toBeTruthy();
  });
});
