export default class IOSSettingsLocators {

    /* element getters */
    get svPlatformText() {
        return element(by.label('Surgeon Vault PLatform'));
    }

    get cloucButton() {
        return element(by.label('CLOUD'));
    }

    get localButton() {
        return element(by.label('LOCAL'));
    }

    get requireNewPassText() {
        return element(by.label('Require Password to Create New Users'));
    }

    get userManagementSelectText() {
        return element(by.label('User Management'));
    }

    get userManagementTitle() {
        return element(by.label('User Management'));
    }

    get adminSettingsBackButton() {
        return element(by.label('Admin Settings'));
    }

    get adminSettingsDoneButton() {
        return element(by.type('_UIButtonBarButton'));
    }

}