describe('Transfer funds between accounts Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', '/index.html')
        cy.get('#signin_button').click()
        cy.get('#login_form').should('be.visible')
        cy.loginExample('username', 'password')
    })

    it('should fill the transfer funds form', () => {
        cy.get('#transfer_funds_tab').click()
        cy.get('#tf_fromAccountId').select('2')
        cy.get('#tf_toAccountId').select('4')
        cy.get('#tf_amount').type('1000')
        cy.get('#tf_description').type('Description of the fund transfer reasons')
        cy.get('#btn_submit').click()
    })

    it('should verify the conversion amount is displayed', () => {
        cy.get('#tf_fromAccountId').should('have.value', 'Checking')
        cy.get('#tf_toAccountId').should('have.value', 'Loan')
        cy.get('#tf_amount').should('have.value', '1000')
        cy.get('#tf_description').should('have.value', 'Description of the fund transfer reasons')
    })
})