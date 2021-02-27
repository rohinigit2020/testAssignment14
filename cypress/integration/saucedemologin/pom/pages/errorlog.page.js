class Errorlog{
    get loginbox(){ return  cy.get("h3[data-test='error']")}

}
export default new Errorlog()