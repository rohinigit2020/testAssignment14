describe("Login scenarios", () => {
    let users = [["",""],["standard_user",""],["standard_user", "secret_pass"],["locked_out_user", "secret_sauce"]]

    for (let i = 0; i < users.length; i++) {
        it("Validating Errors", () => {
            cy.log(users.length)
            cy.visit("https://www.saucedemo.com/")
            cy.log(i)
            if(i == 0){
            cy.get("#user-name")
            cy.get("#password")
            }else if(i == 1){
                cy.get("#user-name").type(users[i][0])
                cy.get("#password")
            }else{
                cy.get("#user-name").type(users[i][0])
                cy.get("#password").type(users[i][1])
            }
            cy.get("#login-button").click()

            cy.get("h3[data-test='error']").should('contain',"Username is required")
        })
    }
})