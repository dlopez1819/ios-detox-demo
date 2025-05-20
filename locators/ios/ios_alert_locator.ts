export default class IOSAlertLocators {

    /* element getters */
    get actionView() {
        return element(by.type('_UIAlertControllerActionView'));
    }

    get textField() {
        return element(by.type('_UIAlertControllerTextField'));
    }

    get textFieldView() {
        return element(by.type('_UIAlertControllerTextFieldView'));
    }

}