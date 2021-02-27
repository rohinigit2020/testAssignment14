class CheckResult{
    get result(){return cy.get("#numberAnswerField") }
    check(ope){
        this.result.should('have.value',ope)
    }
}
export default new CheckResult()