describe("bin",()=>{
    it("test1",()=>{
        cy.visit("https://testsheepnz.github.io/BasicCalculator.html")
        cy.get("#number1Field").type('4')
        cy.get("#number2Field").type('3')
        cy.get(" #selectOperationDropdown").select('Add')
        cy.get("#calculateButton").click()
        cy.get("#numberAnswerField")
        
    })
})