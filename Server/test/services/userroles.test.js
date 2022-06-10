const app = require('../../src/app');

describe('\'userroles\' service', () => {
  it('registered the service', () => {
    const service = app.service('userroles');
    expect(service).toBeTruthy();
  });
});
