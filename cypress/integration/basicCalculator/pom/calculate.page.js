class Calculate{
    get btncalc(){ return cy.get("#calculateButton")}

    clickbtn(){
        this.btncalc.click()
    }
}
export default new Calculate()