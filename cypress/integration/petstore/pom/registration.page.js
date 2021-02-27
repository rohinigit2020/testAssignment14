class Registration{
    get mustSignin(){ return cy.contains("must sign on")}
    get registernow(){ return cy.contains("Register Now")}
    ifmustSignin(){
        this.mustSignin.should("be.visible")
    }
    registerNow(){
        this.registernow.click()
    }
}
export default new Registration()