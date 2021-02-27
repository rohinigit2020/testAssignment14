class Users {
    get Uname() { return cy.get("#user-name") }
    get Pword() { return cy.get("#password") }

    enterUname(name) {
        if (name != "") {
            this.Uname.type(name)
        }
    }
    enterpword(pswd) {
        if (pswd != "") {
            this.Pword.type(pswd)
        }
    }
}
export default new Users()