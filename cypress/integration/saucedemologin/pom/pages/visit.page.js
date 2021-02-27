class Visit{
    openUrl(){
        cy.visit("https://www.saucedemo.com/")
    }

}
export default new Visit()