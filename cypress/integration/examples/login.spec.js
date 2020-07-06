describe ('Simple login input test', () => {
    it('should overrite the current time', () => {
        const date = new Date(2000, 1, 1).getTime() // Returns a timestamp
        cy.clock(date)
        cy.log(date)
    })
    it('Should load zero webappsecurity bank web site', () => {
        cy.visit('http://zero.webappsecurity.com/', {timeout: 10000})
        cy.title().should('contain', 'Zero - Personal Banking - Loans - Credit Cards')
        cy.url().should('include', 'zero.webappsecurity')
        cy.clearCookies({log: true}) // In case you need to clear cookies
        cy.clearLocalStorage('value of item to remove', {log: true}) // In case you need to clear some item
    })
    it('should go to  login page', () => {
        cy.contains('Signin').click()
        cy.title().should('contain', 'Zero - Log in')
        cy.get('h3').should('be.visible').contains('Log in to ZeroBank')
    })
    it('should fill username with delay', () => {
        cy.get('#user_login').clear().type('Some Invalid Name'), {delay: 10000} // Delay not working
    })
    it('should fill password using an alias', () => {
        cy.get('#user_password').as('password') // Alias creation
        cy.get('@password').clear()
        cy.get('@password').type('Some Invalid password')
    })
    it('should mark checkbox', () => {
        cy.get('input[type="checkbox"]').click()
        cy.wait(1000)
    })
    it('should log in form', () => {
        cy.contains('Sign in').click()
    })
    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible')
        .and('contain', 'Login and/or password are wrong.')
    })
})