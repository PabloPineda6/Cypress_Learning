describe ('Cypress.$ jQuery function', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/', {timeout: 10000})
    })
    it('should expose jQuery element in the current window', () => {
        const signInButton = Cypress.$('#signin_button')
        signInButton.click()
    })
})