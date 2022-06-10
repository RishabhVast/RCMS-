const app = require('../../src/app');

describe('\'Teachers\' service', () => {
  it('registered the service', () => {
    const service = app.service('teachers');
    expect(service).toBeTruthy();
  });
});
