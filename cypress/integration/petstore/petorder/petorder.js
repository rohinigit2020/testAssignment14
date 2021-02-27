import {Given, When,Then} from "cypress-cucumber-preprocessor/steps"
import Visit from "../pom/visit.page"
import SelectProduct from "../pom/selectproduct.page"
import Products from "../pom/products.page"
import Items from "../pom/items.page"
import Item from "../pom/item.page"
import Shoppingcart from "../pom/shoppingcart.page"
import Registration from "../pom/registration.page"

Given("I am in a Jpetstore website",()=>{
    Visit.openUrl()
})
When("I select product",()=>{
    SelectProduct.selectProd()
})
Then("The pet Product page opens",()=>{
    Products.ifProductPage()
})
When("I select a favourite Product",()=>{
    Products.selectproductID()
})
Then("The Items List page opens",()=>{
    Items.ifItempage()
})
When("I select my item",()=>{
    Items.selectItem()
})
Then("The Item Details page opens",()=>{
    
})
When("I select Add to cart",()=>{
    Item.addCart()
})
Then("Shopping cart page opens with my pet",()=>{
    Shoppingcart.ifShoppingCart()
})
When("I click Proceed to Checkout",()=>{
    Shoppingcart.proceedToCheckout()
})
Then("mandetory Sign In page opens",()=>{
    Registration.ifmustSignin()
})
When("I click Register Now",()=>{
    Registration.registerNow()
})