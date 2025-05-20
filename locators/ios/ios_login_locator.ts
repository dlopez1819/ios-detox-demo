
export default class IOSLoginLocators {

    /* element getters */
    get alreadySignIn() {
        return element(by.text('Already have an account? Sign In'));
    }
    
    get gearIcon() {
        return element(by.label('GearIcon'));
    }
   
    

}