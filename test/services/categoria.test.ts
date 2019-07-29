/// <reference types="mocha"/>
import assert from 'assert';
import app from '../../src/app';

describe('\'categoria\' service', () => {
  it('registered the service', () => {
    const service = app.service('categoria');

    assert.ok(service, 'Registered the service');
  });
});
