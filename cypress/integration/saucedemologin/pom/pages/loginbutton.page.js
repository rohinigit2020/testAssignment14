class Loginbutton{
    get button(){ return cy.get("#login-button")}
    clickLogin(){
        this.button.click()
    }
}
export default new Loginbutton()
  