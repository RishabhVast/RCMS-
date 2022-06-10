const app = require('../../src/app');

describe('\'Subject Teacher\' service', () => {
  it('registered the service', () => {
    const service = app.service('Subject_Teacher');
    expect(service).toBeTruthy();
  });
});
