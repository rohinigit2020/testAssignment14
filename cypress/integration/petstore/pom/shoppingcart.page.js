class Shoppingcart{
    get shoppingCart(){ return cy.contains("Shopping Cart")}
    ifShoppingCart(){
        this.shoppingCart.should('be.visible')
    }
    get proceed(){ return cy.contains("Proceed to Checkout")}
    proceedToCheckout(){
        this.proceed.click()
    }
}
export default new Shoppingcart()