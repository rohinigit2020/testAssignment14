class Item{
    get ifItempage(){ return cy.contains("Add to Cart") }

    addCart(){
        this.ifItempage.click()
     }
}
export default new Item()