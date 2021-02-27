import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

import Visit from "../pom/pages/visit.page"
import Errorlog from "../pom/pages/errorlog.page"
import Loginbutton from "../pom/pages/loginbutton.page"
import Users from "../pom/pages/users.page"

Given("When I am in Saucedemo Site",()=>{
    Visit.openUrl()
})

Then("Error logged is {string}",(err)=>{
    //Errorlog.validateErr(err) 
    Errorlog.loginbox.should("contain",err) 
})

When("user name is {string} and password is {string}",(uname,pswd)=>{
    Users.enterUname(uname)
    Users.enterpword(pswd)
    Loginbutton.clickLogin()
})