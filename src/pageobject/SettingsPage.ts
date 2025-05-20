import {expect, element} from 'detox'
import { waitForExist } from 'webdriverio/build/commands/element';
import IOSSettingsLocators from '../../locators/ios/ios_settings_locator';

let settingsLocator = new IOSSettingsLocators();
export default class SettingsPage{

  static async assertIsInSettingsPage() {
    await waitFor(settingsLocator.svPlatformText).toBeVisible();
  }

  static async verifyUserManagementView() {
    await settingsLocator.userManagementSelectText.tap();
    await waitFor(settingsLocator.userManagementTitle).toBeVisible();
  }

  static async closeSettingsPage() {
    await settingsLocator.adminSettingsDoneButton.atIndex(1).tap();;
  }
}