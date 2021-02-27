import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import Visit from "../pom/visit.page"
import EnterNumbers from "../pom/enternums.page"
import SelectOperator from "../pom/selectOperator.page"
import Calculate from "../pom/calculate.page"
import CheckResult from "../pom/checkResult.page"

Given("I am in Testsheepng basic calculator", () => {
    Visit.openUrl()
})
When("I enter the {string} and {string}", (num1, num2) => {
    EnterNumbers.giveVals(num1,num2)
})
When("I select an {string}", (symbol) => {
    SelectOperator.giveOperator(symbol)
})
When("I click the calculate button", () => {
    Calculate.clickbtn()
})
Then("The result value should be {string}", (val) => {
    CheckResult.check(val)
}) 
