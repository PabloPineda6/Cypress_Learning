describe('Currency Exchange Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', '/index.html')
        cy.get('#signin_button').click()
        cy.get('#login_form').should('be.visible')
        cy.loginExample('username', 'password')
    })

    it('should fill currency conversion form', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('GBP')
        cy.get('#pc_amount').type('2000')
        cy.get('#pc_inDollars_true').click()
        cy.get('#pc_calculate_costs').click()
    })

    it('should verify the conversion amount is displayed', () => {
        cy.get('#pc_conversion_amount').should('be.visible').and('contain', '1180.50 pound (GBP) = 2000.00 U.S. dollar (USD)')
    })
})