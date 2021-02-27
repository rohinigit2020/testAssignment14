class SelectProduct{
    get products(){ return cy.get("div:nth-child(2) div:nth-child(2) div:nth-child(1) div:nth-child(1) > a:nth-child(4)")}
    selectProd(){
        this.products.click()
    }
}
export default new SelectProduct()