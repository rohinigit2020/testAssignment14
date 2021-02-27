class Products {
    get ifproduct() { return cy.contains("Product ID")}
    get product() { return cy.get("tbody tr:nth-child(7) td:nth-child(1) a:nth-child(1)") }
    ifProductPage() {
        this.ifproduct.should('be.visible')
    }
    selectproductID() {
        this.product.click()
    }
}
export default new Products()