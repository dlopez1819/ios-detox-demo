import {beforeEach, afterEach} from '@jest/globals'

beforeEach(async () => {
    await device.launchApp({newInstance: true});
  });
  afterEach(async () => {
    await device.terminateApp();
  });