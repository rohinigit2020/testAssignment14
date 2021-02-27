class Visit{
    openUrl(){
        cy.visit("https://petstore.octoperf.com/actions/Catalog.action")
    }
}
export default new Visit()