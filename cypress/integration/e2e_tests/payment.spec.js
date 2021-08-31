describe('creating a new Payee Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', '/index.html')
        cy.get('#signin_button').click()
        cy.get('#login_form').should('be.visible')
        cy.loginExample('username', 'password')
    })

    it('should send a new fake payment', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').type('Wellsfargo')
        cy.get('#sp_account').type('Credit Card')
        cy.get('#sp_amount').type('2000')
        cy.get('#sp_date').type('2021-08-31 {enter}')
        cy.get('#sp_description').type('description of the payment')
        cy.get('#pay_saved_payees').click()
    })

    it('should verify the success message is displayed', () => {
        cy.get('#alert_content').should('be.visible').and('contain', 'The payment was successfully submitted.')
    })
})