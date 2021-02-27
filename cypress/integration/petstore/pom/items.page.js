class Items{
    get itemID(){ return cy.contains("Item ID")}
    get item(){ return cy.get("tbody tr:nth-child(3) td:nth-child(1)")}
    ifItempage(){
        this.itemID.should('be.visible')
    }
    selectItem(){
        this.item.click()
    }
}
export default new Items()