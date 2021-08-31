describe('creating a new Payee Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', '/index.html')
        cy.get('#signin_button').click()
        cy.get('#login_form').should('be.visible')
        cy.loginExample('username', 'password') // using command in support folder instead of fixture
    })

    it('should add a new payee to the list', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Name')
        cy.get('#np_new_payee_address').type('Address')
        cy.get('#np_new_payee_account').type('123456789')
        cy.get('#np_new_payee_details').type('Details')
        cy.get('#add_new_payee').click()
    })

    it('should verify the success message is displayed', () => {
        cy.get('#alert_content').should('be.visible').and('contain', 'The new payee Name was successfully created.')
    })
})