class SelectOperator{
    get operator(){ return cy.get(" #selectOperationDropdown") }
    giveOperator(opr){
        this.operator.select(opr)
    }
}
export default new SelectOperator()