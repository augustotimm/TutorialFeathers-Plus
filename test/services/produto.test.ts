/// <reference types="mocha"/>
import assert from 'assert';
import app from '../../src/app';

describe('\'produto\' service', () => {
  it('registered the service', () => {
    const service = app.service('produto');

    assert.ok(service, 'Registered the service');
  });
});
