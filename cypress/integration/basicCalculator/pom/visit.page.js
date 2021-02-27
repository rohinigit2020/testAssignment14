class Visit{
    openUrl(){
        cy.visit("https://testsheepnz.github.io/BasicCalculator.html")
    }
}
export default new Visit()