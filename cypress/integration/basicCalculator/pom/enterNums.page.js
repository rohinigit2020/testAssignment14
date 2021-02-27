class EnterNumbers{
    get fnum(){ return cy.get("#number1Field")}
    get snum(){ return cy.get("#number2Field")}
    giveVals(n1,n2){
        this.fnum.type(n1)
        this.snum.type(n2)
    }
}
export default new EnterNumbers()