import {expect, element} from 'detox'
import { waitForExist } from 'webdriverio/build/commands/element';
import IOSLoginLocators from '../../locators/ios/ios_login_locator';
import IOSAlertLocators from '../../locators/ios/ios_alert_locator';

let loginLocator = new IOSLoginLocators();
let alertLocator= new IOSAlertLocators();
export default class LoginPage{

  static async assertIsInLoginPage() {
    await waitFor(loginLocator.alreadySignIn).toBeVisible();
    
  }

  static async loginPage() {

    // TODO : creteandials experired

  }

  static async selectAdminSettings() {
    await waitFor(loginLocator.gearIcon).toBeVisible();
    await loginLocator.gearIcon.tap();
  }

  static async adminSettings(admin_password: number) {
    await this.selectAdminSettings();
    await this.adminCredentials(admin_password);
  }

  static async creatSettingsAccount(admin_password: number) {
    await this.selectAdminSettings();
    await alertLocator.actionView.atIndex(0).tap();
    await this.adminCredentials(admin_password);

  }

  static async adminCredentials(admin_password: number) {
    await waitFor(alertLocator.textField).toBeVisible().withTimeout(500);
    await alertLocator.textField.atIndex(0).tap();
    await alertLocator.textFieldView.atIndex(0).replaceText(admin_password.toString());
    await alertLocator.actionView.atIndex(1).tap();
  }
    
}