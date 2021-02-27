import Visit from "../pages/visit.page"
import Errorlog from "../pages/errorlog.page"
import Loginbutton from "../pages/loginbutton.page"
import Users from "../pages/users.page"

describe("Login validations",()=>{
    let users = [["",""],["standard_user",""],["standard_user", "secret_pass"],["locked_out_user", "secret_sauce"]]
    for (let i = 0; i < users.length; i++) {
        it("Validating Errors", () => {
            Visit.openUrl()
            if(i == 0){
                
                }else if(i == 1){
                    Users.enterUname(users[i][0])
                }else{
                    Users.enterUname(users[i][0])
                    Users.enterpword(users[i][1])
                }
            Loginbutton.clickLogin()
        
            Errorlog.loginbox.then($err=>{
                cy.log($err.text())

            })
            
        })
    }

})