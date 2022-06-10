const app = require('../../src/app');

describe('\'grades\' service', () => {
  it('registered the service', () => {
    const service = app.service('grades');
    expect(service).toBeTruthy();
  });
});
