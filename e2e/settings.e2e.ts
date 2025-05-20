import {expect, element} from 'detox'
import LoginPage from '../src/pageobject/LoginPage';
import SettingsPage from '../src/pageobject/SettingsPage';

describe('FirstTestE2E', () => {

  let admin_password = 1234;
  
  beforeEach(async () => {
    await device.launchApp({newInstance: true});
  });

  afterEach(async () => {
    await SettingsPage.closeSettingsPage();
  })

  it('should have a settings account', async () => {
    await LoginPage.assertIsInLoginPage();
    await LoginPage.creatSettingsAccount(admin_password);
    await SettingsPage.assertIsInSettingsPage();
  });

  it('should have a user management screen', async () => {
    await LoginPage.assertIsInLoginPage();
    await LoginPage.adminSettings(admin_password);
    await SettingsPage.assertIsInSettingsPage();
    await SettingsPage.verifyUserManagementView();
  });

});
