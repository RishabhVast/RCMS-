const app = require('../../src/app');

describe('\'student\' service', () => {
  it('registered the service', () => {
    const service = app.service('y');
    expect(service).toBeTruthy();
  });
});
